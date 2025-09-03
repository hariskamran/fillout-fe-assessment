'use client';

import React, { ReactElement } from 'react';

import Image from 'next/image';

import { cva } from 'class-variance-authority';

import TabContextMenu from '@/components/components/TabContextMenu';
import {
  ContextMenu,
  ContextMenuTrigger,
} from '@/shadcn/components/ui/context-menu';
import { cn } from '@/shadcn/lib/utils';

const tabButtonVariants = cva(
  'h-9 px-2.5 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer focus:outline-none focus-visible:border-[#2F72E2]',
  {
    variants: {
      variant: {
        default:
          'bg-tab-button-background/15 border border-tab-button-background/0 text-tab-button-text hover:bg-tab-button-background/35 transition-colors duration-150 focus-visible:bg-background focus-visible:text-foreground focus-visible:shadow-md focus-visible:border focus-visible:border-tab-border focus-visible:border-[#2F72E2]',
        active:
          'bg-background text-foreground shadow-md border border-tab-border hover:bg-tab-button-background/5 transition-colors duration-150',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function TabButton({
  className,
  variant,
  icon,
  text,
  onClick,
}: {
  className?: string;
  variant: 'default' | 'active' | null | undefined;
  icon: string;
  text: string;
  onClick?: () => void;
}): ReactElement {
  const isActive = variant === 'active';
  const showOptions = isActive && icon !== 'add';

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <button
          type="button"
          onClick={onClick}
          onContextMenu={e => {
            if (!isActive) e.preventDefault();
          }}
          className={cn(
            'fade-in-pop group',
            tabButtonVariants({ variant: variant || 'default', className }),
          )}
        >
          <span className="relative inline-flex w-5 h-5 items-center justify-center">
            {/* Default icon */}
            <Image
              src={`/icons/${icon}.svg`}
              alt={text.toLowerCase()}
              width={20}
              height={20}
              className={cn(
                'w-5 h-5',
                isActive ? 'hidden' : 'block group-focus-visible:hidden',
              )}
            />
            {/* Active icon */}
            <Image
              src={`/icons/${icon}_active.svg`}
              alt={text.toLowerCase()}
              width={20}
              height={20}
              className={cn(
                'w-5 h-5 absolute inset-0',
                isActive ? 'block' : 'hidden group-focus-visible:block',
              )}
            />
          </span>
          <span>{text}</span>
          <button
            type="button"
            className={cn(
              'inline-flex items-center justify-center overflow-hidden transition-all duration-200 ease-out py-1.5 rounded-md hover:bg-tab-button-background/10 cursor-pointer',
              showOptions
                ? 'w-4 ml-1 opacity-100 scale-100 translate-x-0'
                : 'w-0 ml-0 opacity-0 scale-75 -translate-x-1 pointer-events-none',
            )}
            aria-hidden={!showOptions}
          >
            <Image
              src="/icons/options.svg"
              alt={`${text.toLowerCase()} options`}
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </button>
        </button>
      </ContextMenuTrigger>
      <TabContextMenu />
    </ContextMenu>
  );
}

export default TabButton;
