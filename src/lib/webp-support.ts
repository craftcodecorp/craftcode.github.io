/**
 * WebP Support Utility
 * 
 * This utility provides functions to check WebP support and load WebP images with fallbacks
 */

// Check if the browser supports WebP format
export const checkWebPSupport = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = () => resolve(true);
    webP.onerror = () => resolve(false);
    webP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
  });
};

// Initialize WebP support detection
let webPSupported: boolean | null = null;

// Function to initialize WebP support detection
export const initWebPSupport = async (): Promise<void> => {
  if (webPSupported === null) {
    webPSupported = await checkWebPSupport();
    
    // Add a class to the document body to indicate WebP support
    if (webPSupported) {
      document.documentElement.classList.add('webp-support');
    } else {
      document.documentElement.classList.add('no-webp-support');
    }
    
    // Apply WebP backgrounds if supported
    if (webPSupported) {
      applyWebPBackgrounds();
    }
  }
};

// Apply WebP backgrounds to elements with data-webp-bg attribute
export const applyWebPBackgrounds = (): void => {
  const elements = document.querySelectorAll('[data-webp-bg]');
  elements.forEach((el) => {
    const webpPath = el.getAttribute('data-webp-bg');
    if (webpPath) {
      (el as HTMLElement).style.backgroundImage = `url('${webpPath}')`;
    }
  });
};

// Get the WebP version of an image path if supported, otherwise return the original
export const getOptimizedImagePath = (originalPath: string): string => {
  if (!webPSupported || !originalPath) return originalPath;
  
  const extension = originalPath.split('.').pop()?.toLowerCase();
  if (!extension || ['webp', 'svg'].includes(extension)) return originalPath;
  
  const basePath = originalPath.substring(0, originalPath.lastIndexOf('.'));
  return `${basePath}.webp`;
};

// Generate a WebP path from a regular image path
export const generateWebPPath = (originalPath: string): string => {
  if (!originalPath) return '';
  
  const extension = originalPath.split('.').pop()?.toLowerCase();
  if (!extension || ['webp', 'svg'].includes(extension)) return '';
  
  const fileName = originalPath.split('/').pop()?.split('.')[0];
  return `/images/webp/${fileName}.webp`;
};
