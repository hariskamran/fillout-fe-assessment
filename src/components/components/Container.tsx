'use client';

import React, { ReactElement } from 'react';

import { DndContext, DragOverlay } from '@dnd-kit/core';

import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import {
  horizontalListSortingStrategy,
  SortableContext,
} from '@dnd-kit/sortable';

import SortableTab from '@/components/components/SortableTab';
import TabButton from '@/components/components/TabButton';
import { PAGES_BY_SLUG } from '@/components/data';
import useDraggableTabs from '@/hooks/useDraggableTabs';
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

  const overlayPage: Page | null = activeSlug
    ? PAGES_BY_SLUG[activeSlug]
    : null;

  return (
    <div className="w-full max-w-[1100px] h-[72px] bg-white shadow-md rounded-md px-5">
      <div className="w-auto h-full flex items-center relative overflow-hidden">
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
            {orderedPages.map(p => (
              <SortableTab
                key={p.slug}
                page={p}
                isActive={page === p.slug}
                onClick={() => setPage(p.slug)}
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
                  blurOnMouseDown
                />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>

        <TabButton variant="active" icon="add" text="Add Page" />
      </div>
    </div>
  );
}

export default Container;
