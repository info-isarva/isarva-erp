import React from 'react';

const HIGHLIGHT_PHRASES = [
  'Every Stage of Growth',
  'Connected in One Platform',
  'Financial Compliance Workflows',
  'Indian Businesses',
  'Saudi Vision 2030 Enterprises',
  'Your Industry',
  'You Can Rely On',
  'Growing Businesses',
  'ISARVA ERP',
  'Questions',
  'Your Business Operations?'
];

/**
 * Renders a section title with a gradient highlight on key emphasis words.
 * Adheres to GEMINI.md rules: native heading tags remain clean while the inner span carries the gradient text.
 */
export function renderTitleWithGradient(title, customHighlight = null, isDark = false) {
  if (!title) return '';
  if (typeof title !== 'string') return title;

  const gradientClass = isDark ? 'text-gradient-light' : 'text-gradient-brand';

  // 1. Explicit target highlight requested
  if (customHighlight && title.includes(customHighlight)) {
    const parts = title.split(customHighlight);
    return (
      <>
        {parts[0]}
        <span className={gradientClass}>{customHighlight}</span>
        {parts.slice(1).join(customHighlight)}
      </>
    );
  }

  // 2. Check catalog of curated enterprise highlight phrases
  for (const phrase of HIGHLIGHT_PHRASES) {
    if (title.includes(phrase)) {
      const parts = title.split(phrase);
      return (
        <>
          {parts[0]}
          <span className={gradientClass}>{phrase}</span>
          {parts.slice(1).join(phrase)}
        </>
      );
    }
  }

  // 3. Fallback: Highlight the last 2-3 words of the headline
  const words = title.trim().split(/\s+/);
  if (words.length >= 4) {
    const splitIndex = Math.max(1, words.length - 3);
    const firstPart = words.slice(0, splitIndex).join(' ');
    const lastPart = words.slice(splitIndex).join(' ');
    return (
      <>
        {firstPart}{' '}
        <span className={gradientClass}>{lastPart}</span>
      </>
    );
  } else if (words.length === 3) {
    return (
      <>
        {words[0]}{' '}
        <span className={gradientClass}>{words[1]} {words[2]}</span>
      </>
    );
  }

  return <span className={gradientClass}>{title}</span>;
}
