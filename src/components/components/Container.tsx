'use client';

import React, { ReactElement, useEffect } from 'react';

import { DndContext, DragOverlay } from '@dnd-kit/core';

import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import {
  horizontalListSortingStrategy,
  SortableContext,
} from '@dnd-kit/sortable';

import HorizontalScrollButtons from '@/components/components/HorizontalScrollButtons';
import SortableTab from '@/components/components/SortableTab';
import TabButton from '@/components/components/TabButton';
import TabHoverActions from '@/components/components/TabHoverActions';
import useDraggableTabs from '@/hooks/useDraggableTabs';
import useHorizontalScrollControls from '@/hooks/useHorizontalScrollControls';
import useAppStore from '@/stores/useAppStore';
import { Page } from '@/types';

function Container(): ReactElement {
  const {
    page,
    setPage,
    tabsOrder,
    activeSlug,
    orderedPages,
    sensors,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
  } = useDraggableTabs();
  const { addPageAt, addPageToEnd } = useAppStore();

  const {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
    update: updateScrollState,
  } = useHorizontalScrollControls({ pageFactor: 0.6 });

  const overlayPage: Page | null = activeSlug
    ? orderedPages.find(p => p.slug === activeSlug) || null
    : null;

  useEffect(() => {
    updateScrollState();
  }, [orderedPages.length, updateScrollState]);

  return (
    <div className="w-[1100px] h-[72px] bg-white shadow-md rounded-md px-5 relative">
      <div
        ref={scrollRef}
        className="w-auto h-full flex items-center relative overflow-y-hidden overflow-x-auto whitespace-nowrap [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden"
      >
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
          modifiers={[restrictToHorizontalAxis]}
        >
          <SortableContext
            items={tabsOrder}
            strategy={horizontalListSortingStrategy}
          >
            {/* insertion slot before first tab */}
            <TabHoverActions onInsert={() => addPageAt(0)} />

            {orderedPages.map((p, i) => (
              <SortableTab
                key={p.slug}
                page={p}
                isActive={page === p.slug}
                onClick={() => setPage(p.slug)}
                onInsertAfter={() => addPageAt(i + 1)}
              />
            ))}
          </SortableContext>

          <DragOverlay adjustScale={false} zIndex={50}>
            {overlayPage ? (
              <div className="group flex items-center">
                <TabButton
                  variant={page === overlayPage.slug ? 'active' : 'default'}
                  icon={overlayPage.icon}
                  text={overlayPage.name}
                />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>

        <TabButton
          variant="active"
          icon="add"
          text="Add Page"
          onClick={() => addPageToEnd()}
        />
      </div>

      <HorizontalScrollButtons
        canScrollLeft={canScrollLeft}
        canScrollRight={canScrollRight}
        onLeft={scrollLeft}
        onRight={scrollRight}
      />
    </div>
  );
}

export default Container;
