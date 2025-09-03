import { useEffect, useState } from 'react';

import {
  DragEndEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

import { PAGES, PAGES_BY_SLUG } from '@/components/data';
import useAppStore from '@/stores/useAppStore';
import { Page } from '@/types';

function useDraggableTabs() {
  const {
    page,
    setPage,
    tabsOrder,
    setTabsOrder,
    beginDrag,
    endDrag,
    dynamicPages,
  } = useAppStore();

  // Initialize order from PAGES once (watch length only)
  useEffect(() => {
    if (!tabsOrder || tabsOrder.length === 0) {
      setTabsOrder(PAGES.map(p => p.slug));
    }
  }, [tabsOrder?.length, setTabsOrder]);

  const orderedPages: Page[] =
    !tabsOrder || tabsOrder.length === 0
      ? PAGES
      : tabsOrder
          .map(slug => dynamicPages[slug] ?? PAGES_BY_SLUG[slug])
          .filter((p): p is Page => Boolean(p));

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
  );

  // Keep only slug; derive Page in the overlay
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const slug = String(event.active.id);
    beginDrag(slug);
    setActiveSlug(slug);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = tabsOrder.indexOf(String(active.id));
      const newIndex = tabsOrder.indexOf(String(over.id));
      if (oldIndex !== -1 && newIndex !== -1) {
        setTabsOrder(arrayMove(tabsOrder, oldIndex, newIndex));
      }
    }
    setActiveSlug(null);
    endDrag();
  };

  const handleDragCancel = () => {
    setActiveSlug(null);
    endDrag();
  };

  return {
    page,
    setPage,
    tabsOrder,
    orderedPages,
    sensors,
    activeSlug,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
  };
}

export default useDraggableTabs;
