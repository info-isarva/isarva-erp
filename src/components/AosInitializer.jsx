'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import 'aos/dist/aos.css';

export default function AosInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    let timerId;
    import('aos').then((module) => {
      const aosInstance = module.default || module;
      aosInstance.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: false,
        offset: 50,
        delay: 50,
      });
      timerId = window.setTimeout(() => {
        aosInstance?.refreshHard?.();
      }, 150);
    });

    return () => {
      if (timerId) window.clearTimeout(timerId);
    };
  }, [pathname]);

  return null;
}

