import React, { ReactElement } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import TabButton from '@/components/components/TabButton';
import TabHoverActions from '@/components/components/TabHoverActions';
import DottedLines from '@/components/components/ui/DottedLines';
import { Page } from '@/types';

function SortableTab({
  page,
  isActive,
  onClick,
  onInsertAfter,
}: {
  page: Page;
  isActive: boolean;
  onClick: () => void;
  onInsertAfter?: () => void;
}): ReactElement {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: page.slug });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="group flex items-center shrink-0"
      {...attributes}
      {...listeners}
    >
      {isDragging ? (
        <>
          <div className="h-9 px-2.5 inline-flex items-center gap-2 rounded-md border border-dashed border-neutral-300 text-transparent bg-transparent">
            <span className="w-[20px] h-[20px] inline-block" aria-hidden />
            <span className="select-none">{page.name}</span>
          </div>
          <DottedLines />
        </>
      ) : (
        <>
          <TabButton
            onClick={onClick}
            variant={isActive ? 'active' : 'default'}
            icon={page.icon}
            text={page.name}
          />
          <TabHoverActions onInsert={onInsertAfter} />
          <div className="shrink-0 -ml-px">
            <DottedLines />
          </div>
        </>
      )}
    </div>
  );
}

export default SortableTab;
