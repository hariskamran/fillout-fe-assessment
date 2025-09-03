'use client';

import React, { ReactElement } from 'react';

import Image from 'next/image';

import { cva } from 'class-variance-authority';

import { cn } from '@/shadcn/lib/utils';

const tabButtonVariants = cva(
  'h-9 px-2.5 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer focus:outline-none focus-visible:border-[#2F72E2]',
  {
    variants: {
      variant: {
        default:
          'bg-tab-button-background/15 border border-tab-button-background/0 text-tab-button-text hover:bg-tab-button-background/35 transition-colors duration-150',
        active:
          'bg-background text-foreground shadow-md border border-tab-border hover:bg-tab-button-background/15 transition-colors duration-150',
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
  blurOnMouseDown,
}: {
  className?: string;
  variant: 'default' | 'active' | null | undefined;
  icon: string;
  text: string;
  onClick?: () => void;
  blurOnMouseDown?: boolean;
}): ReactElement {
  const iconColor = variant === 'active' ? '_active' : '';
  const showOptions = variant === 'active' && icon !== 'add';

  return (
    <button
      type="button"
      className={cn(
        tabButtonVariants({ variant: variant || 'default', className }),
      )}
      onClick={onClick}
      onMouseDown={blurOnMouseDown ? e => e.currentTarget.blur() : undefined}
    >
      <Image
        src={`/icons/${icon}${iconColor}.svg`}
        alt={text.toLowerCase()}
        width={20}
        height={20}
      />
      <span>{text}</span>

      {/* Animated options icon with width/margin collapse */}
      <span
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
      </span>
    </button>
  );
}

export default TabButton;
