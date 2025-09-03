import React, { ReactElement } from 'react';

import Image from 'next/image';

import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
} from '@/shadcn/components/ui/context-menu';

function TabContextMenu(): ReactElement {
  return (
    <ContextMenuContent className="w-56 border-0">
      {/* Header */}
      <ContextMenuLabel className="text-lg">Settings</ContextMenuLabel>

      <ContextMenuSeparator />

      <ContextMenuItem>
        <Image src="/icons/flag.svg" alt="flag" width={16} height={16} />
        <span>Set first page</span>
      </ContextMenuItem>

      <ContextMenuItem>
        <Image src="/icons/edit.svg" alt="edit" width={16} height={16} />
        <span>Rename</span>
      </ContextMenuItem>

      <ContextMenuItem>
        <Image src="/icons/copy.svg" alt="copy" width={16} height={16} />
        <span>Copy</span>
      </ContextMenuItem>

      <ContextMenuItem>
        <Image
          src="/icons/duplicate.svg"
          alt="duplicate"
          width={16}
          height={16}
        />
        <span>Duplicate</span>
      </ContextMenuItem>

      <div className="w-full px-3">
        <ContextMenuSeparator />
      </div>

      {/* Footer */}
      <ContextMenuItem variant="destructive">
        <Image src="/icons/delete.svg" alt="delete" width={16} height={16} />
        <span>Delete</span>
      </ContextMenuItem>
    </ContextMenuContent>
  );
}

export default TabContextMenu;
