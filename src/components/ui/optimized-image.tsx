import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  webpSrc?: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  className?: string;
  loadingStrategy?: 'lazy' | 'eager';
  onLoad?: () => void;
}

/**
 * OptimizedImage component that provides:
 * - WebP format support with fallback
 * - Lazy loading
 * - Responsive image handling with srcset
 * - Loading state management
 */
export function OptimizedImage({
  src,
  alt,
  webpSrc,
  fallbackSrc,
  width,
  height,
  className,
  loadingStrategy = 'lazy',
  onLoad,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Handle image load event
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  // Handle image error event
  const handleError = () => {
    setError(true);
  };

  // Generate srcset if the filename contains responsive indicators
  const generateSrcSet = (imageSrc: string): string | undefined => {
    // Check if the image filename contains responsive indicators like "_w_800"
    if (imageSrc.includes('_w_') || imageSrc.includes('_c_scale')) {
      // This is a simplified example - in a real app, you'd generate proper srcset
      // based on your image naming convention or from a CDN
      const basePath = imageSrc.substring(0, imageSrc.lastIndexOf('.'));
      const extension = imageSrc.substring(imageSrc.lastIndexOf('.'));
      
      return `
        ${basePath}_w_480${extension} 480w,
        ${basePath}_w_800${extension} 800w,
        ${basePath}_w_1200${extension} 1200w
      `;
    }
    return undefined;
  };

  // Determine the actual source to use
  const actualSrc = error && fallbackSrc ? fallbackSrc : src;
  const actualWebpSrc = error && fallbackSrc ? undefined : webpSrc;
  
  // Generate srcset
  const srcSet = generateSrcSet(actualSrc);

  return (
    <div 
      className={cn(
        "relative overflow-hidden",
        !isLoaded && "bg-muted animate-pulse",
        className
      )}
      style={{ 
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        aspectRatio: width && height ? `${width}/${height}` : undefined
      }}
    >
      <picture>
        {actualWebpSrc && (
          <source 
            srcSet={actualWebpSrc} 
            type="image/webp" 
          />
        )}
        <img
          src={actualSrc}
          alt={alt}
          width={width}
          height={height}
          loading={loadingStrategy}
          onLoad={handleLoad}
          onError={handleError}
          srcSet={srcSet}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          {...props}
        />
      </picture>
    </div>
  );
}
