'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  animation = 'fade-up', // 'fade-up' | 'fade-down' | 'fade-in' | 'zoom-in'
  delay = 0,
  threshold = 0.12,
  className = '',
  as: Component = 'div',
  ...rest
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-down':
        return isVisible ? 'animate-fade-down' : 'opacity-0 -translate-y-4';
      case 'fade-in':
        return isVisible ? 'animate-fade-in' : 'opacity-0';
      case 'zoom-in':
        return isVisible ? 'animate-zoom-in' : 'opacity-0 scale-95';
      case 'fade-up':
      default:
        return isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-6';
    }
  };

  const delayClass = delay > 0 ? `animation-delay-${delay}` : '';

  return (
    <Component
      ref={elementRef}
      className={`transition-all duration-300 ${getAnimationClass()} ${delayClass} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
