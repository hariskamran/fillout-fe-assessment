import { useEffect, useRef, useState } from 'react';

type Options = {
  pageFactor?: number; // Percentage of container width to scroll per click; default 0.6 (60%)
  edgeEpsilon?: number; // Tolerance for sub-pixel rounding
};

function useHorizontalScrollControls(options?: Options) {
  const { pageFactor = 0.6, edgeEpsilon = 2 } = options || {};

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const update = () => {
    const el = scrollRef.current;
    if (!el) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScrollLeft = Math.max(0, scrollWidth - clientWidth);
    setCanScrollLeft(scrollLeft > edgeEpsilon);
    setCanScrollRight(maxScrollLeft - scrollLeft > edgeEpsilon);
  };

  const scrollByAmount = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const delta = Math.round(el.clientWidth * pageFactor);
    el.scrollBy({
      left: dir === 'left' ? -delta : delta,
      behavior: 'smooth',
    });
  };

  const scrollLeft = () => scrollByAmount('left');
  const scrollRight = () => scrollByAmount('right');

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    update();

    const handleScroll = () => update();
    el.addEventListener('scroll', handleScroll, { passive: true });

    const ro = new ResizeObserver(() => update());
    ro.observe(el);

    const onResize = () => update();
    window.addEventListener('resize', onResize);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      ro.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, [edgeEpsilon, pageFactor]);

  return {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
    update,
  };
}

export default useHorizontalScrollControls;
