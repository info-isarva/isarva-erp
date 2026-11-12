'use client';

import { useEffect } from 'react';

/**
 * Synchronizes collapsed FAQ question button heights row-for-row across a
 * 2-column independent flex stack so longer questions in one column never
 * misalign sibling rows, while still allowing open accordions to expand without
 * creating empty gaps in the opposite column.
 */
export function useSyncedFaqHeights(gridRef, depKey = 0) {
  useEffect(() => {
    const grid = gridRef?.current;
    if (!grid || typeof window === 'undefined') return undefined;

    let rafId = null;
    let lastWidth = -1;

    const measureAndSync = () => {
      const cols = Array.from(grid.children);
      if (cols.length < 2) return;

      const leftBtns = Array.from(cols[0].querySelectorAll('[data-faq-btn]'));
      const rightBtns = Array.from(cols[1].querySelectorAll('[data-faq-btn]'));
      const allBtns = [...leftBtns, ...rightBtns];

      // Clear any previous inline min-height before measuring natural size
      allBtns.forEach((btn) => {
        btn.style.minHeight = '';
      });

      const colCount = window
        .getComputedStyle(grid)
        .gridTemplateColumns.trim()
        .split(/\s+/).length;

      // Single-column layout (mobile): keep natural heights
      if (colCount < 2) return;

      const pairCount = Math.min(leftBtns.length, rightBtns.length);
      for (let i = 0; i < pairCount; i += 1) {
        const leftBtn = leftBtns[i];
        const rightBtn = rightBtns[i];
        const maxH = Math.ceil(
          Math.max(
            leftBtn.getBoundingClientRect().height,
            rightBtn.getBoundingClientRect().height
          )
        );
        const px = `${maxH}px`;
        leftBtn.style.minHeight = px;
        rightBtn.style.minHeight = px;
      }
    };

    const scheduleSync = () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        measureAndSync();
      });
    };

    // Initial sync + re-sync once web fonts finish loading
    scheduleSync();
    let cancelled = false;
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) scheduleSync();
      });
    }

    // Re-sync when container width changes (responsive wrapping)
    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver((entries) => {
        const width = entries[0]?.contentRect?.width ?? grid.clientWidth;
        if (Math.abs(width - lastWidth) > 0.5) {
          lastWidth = width;
          scheduleSync();
        }
      });
      resizeObserver.observe(grid);
    }

    // Re-sync if text or child nodes change dynamically
    const mutationObserver = new MutationObserver(() => {
      scheduleSync();
    });
    mutationObserver.observe(grid, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: false,
    });

    return () => {
      cancelled = true;
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      if (resizeObserver) resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [gridRef, depKey]);
}

