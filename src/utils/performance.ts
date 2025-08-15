// Performance optimization utilities

// Type definitions for Google Analytics
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: any) => void;
  }
}

// Preload critical resources
export const preloadResource = (href: string, as: string): void => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Prefetch non-critical resources
export const prefetchResource = (href: string): void => {
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = href;
  document.head.appendChild(link);
};

// Font loading optimization to prevent layout shifts
export const optimizeFontLoading = (): void => {
  // Preload critical fonts
  const criticalFonts = [
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      as: "style",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800;900&display=swap",
      as: "style",
    },
  ];

  criticalFonts.forEach((font) => {
    preloadResource(font.href, font.as);
  });

  // Add font-display: swap to prevent layout shifts
  const style = document.createElement("style");
  style.textContent = `
    @font-face {
      font-family: 'Inter';
      font-display: swap;
    }
    @font-face {
      font-family: 'Space Grotesk';
      font-display: swap;
    }
    @font-face {
      font-family: 'JetBrains Mono';
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
};

// Reserve space for elements to prevent layout shifts
export const reserveSpaceForElement = (
  selector: string,
  dimensions: { width?: number; height?: number }
): void => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    const el = element as HTMLElement;
    if (dimensions.width) {
      el.style.minWidth = `${dimensions.width}px`;
    }
    if (dimensions.height) {
      el.style.minHeight = `${dimensions.height}px`;
    }
  });
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: "50px",
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void): void => {
  if (typeof performance !== "undefined" && performance.mark) {
    performance.mark(`${name}-start`);
    fn();
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
  } else {
    fn();
  }
};

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Check if element is in viewport
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Optimize images for different screen sizes
export const getOptimizedImageSrc = (
  src: string,
  width: number,
  quality: number = 80
): string => {
  // This is a placeholder - in a real app, you'd use a CDN or image optimization service
  return `${src}?w=${width}&q=${quality}`;
};

// Web Vitals monitoring
export const reportWebVitals = (metric: any): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", metric.name, {
      event_category: "Web Vitals",
      event_label: metric.id,
      value: Math.round(
        metric.name === "CLS" ? metric.value * 1000 : metric.value
      ),
      non_interaction: true,
    });
  }

  // Log to console in development
  if (
    typeof process !== "undefined" &&
    process.env.NODE_ENV === "development"
  ) {
    console.log(metric);
  }
};

// Service Worker registration for caching
export const registerServiceWorker = async (): Promise<void> => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      console.log("SW registered: ", registration);
    } catch (registrationError) {
      console.log("SW registration failed: ", registrationError);
    }
  }
};

// Critical CSS inlining helper
export const inlineCriticalCSS = (css: string): void => {
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
};

// Resource hints for better performance
export const addResourceHints = (): void => {
  const hints = [
    { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
    { rel: "dns-prefetch", href: "//fonts.gstatic.com" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
  ];

  hints.forEach((hint) => {
    const link = document.createElement("link");
    Object.assign(link, hint);
    document.head.appendChild(link);
  });

  // Optimize font loading
  optimizeFontLoading();
};

// Layout shift prevention utilities
export const preventLayoutShifts = (): void => {
  // Reserve space for critical elements
  reserveSpaceForElement(".hero-mascot", { height: 200 });
  reserveSpaceForElement(".hero-heading", { height: 200 });
  reserveSpaceForElement(".hero-actions", { height: 120 });

  // Add responsive space reservation
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  const updateSpaceReservation = () => {
    if (mediaQuery.matches) {
      reserveSpaceForElement(".hero-mascot", { height: 300 });
    } else {
      reserveSpaceForElement(".hero-mascot", { height: 150 });
    }
  };

  mediaQuery.addListener(updateSpaceReservation);
  updateSpaceReservation();
};
