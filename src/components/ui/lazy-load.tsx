import { useState, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface LazyLoadProps {
  children: ReactNode;
  className?: string;
  placeholder?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}

/**
 * LazyLoad component that defers rendering of components until they are near the viewport
 * Uses IntersectionObserver API for efficient detection
 */
export function LazyLoad({
  children,
  className,
  placeholder,
  threshold = 0.1,
  rootMargin = '100px',
  enabled = true,
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(!enabled);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    // If lazy loading is disabled, always show content
    if (!enabled) {
      setIsVisible(true);
      return;
    }

    // Skip if no container ref or already visible
    if (!containerRef || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element becomes visible, update state
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, no need to observe anymore
          observer.disconnect();
        }
      },
      {
        root: null, // viewport
        rootMargin,
        threshold,
      }
    );

    observer.observe(containerRef);

    return () => {
      observer.disconnect();
    };
  }, [containerRef, isVisible, threshold, rootMargin, enabled]);

  return (
    <div
      ref={setContainerRef}
      className={cn("min-h-[20px]", className)}
    >
      {isVisible ? children : placeholder || (
        <div className="w-full h-full min-h-[100px] bg-muted/30 animate-pulse rounded-md" />
      )}
    </div>
  );
}
