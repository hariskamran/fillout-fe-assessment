import React, { ReactElement } from 'react';

function HorizontalScrollButtons({
  canScrollLeft,
  canScrollRight,
  onLeft,
  onRight,
}: {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  onLeft: () => void;
  onRight: () => void;
}): ReactElement | null {
  const hasOverflow = canScrollLeft || canScrollRight;
  if (!hasOverflow) return null;

  return (
    <>
      {canScrollLeft && (
        <button
          type="button"
          onClick={onLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 cursor-pointer inline-flex items-center justify-center rounded-full bg-background text-foreground shadow-md border border-tab-border transition-colors duration-150"
          aria-label="Scroll left"
        >
          <span className="text-base leading-none select-none">‹</span>
        </button>
      )}

      {canScrollRight && (
        <button
          type="button"
          onClick={onRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 cursor-pointer inline-flex items-center justify-center rounded-full bg-background text-foreground shadow-md border border-tab-border transition-colors duration-150"
          aria-label="Scroll right"
        >
          <span className="text-base leading-none select-none">›</span>
        </button>
      )}
    </>
  );
}

export default HorizontalScrollButtons;
