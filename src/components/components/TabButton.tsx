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
          'bg-tab-button-background/15 border border-tab-button-background/0 text-tab-button-text hover:bg-tab-button-background/35 transition-colors duration-150',
        active:
          'bg-background text-foreground shadow-md border border-tab-border transition-colors duration-150',
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
  const isActive: boolean = variant === 'active';
  const iconColor: string = isActive ? '_active' : '';
  const showOptions: boolean = isActive && icon !== 'add';

  const Button: ReactElement = (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        tabButtonVariants({ variant: variant || 'default', className }),
      )}
    >
      <Image
        src={`/icons/${icon}${iconColor}.svg`}
        alt={text.toLowerCase()}
        width={20}
        height={20}
      />
      <span>{text}</span>
      <div
        className={cn(
          'inline-flex items-center justify-center overflow-hidden transition-all duration-200 ease-out',
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
      </div>
    </button>
  );

  {
    /* Optimization to load ContextMenu only when needed */
  }
  if (!showOptions) return Button;

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{Button}</ContextMenuTrigger>
      <TabContextMenu />
    </ContextMenu>
  );
}

export default TabButton;
