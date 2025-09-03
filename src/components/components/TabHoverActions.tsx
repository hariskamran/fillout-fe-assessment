import React, { ReactElement } from 'react';

import SmallRoundButton from '@/components/components/SmallRoundButton';
import DottedLines from '@/components/components/ui/DottedLines';

function TabHoverActions(): ReactElement {
  return (
    <div
      className="
        flex items-center
        w-0 transition-[width] duration-200 ease-out
        group-hover:w-[40px] group-focus-within:w-[40px]
      "
      aria-hidden="true"
    >
      <div
        className="
          flex items-center
          opacity-0 pointer-events-none
          transition-opacity duration-150 ease-out
          group-hover:opacity-100 group-hover:pointer-events-auto
          group-focus-within:opacity-100 group-focus-within:pointer-events-auto
        "
      >
        <div className="shrink-0">
          <DottedLines />
        </div>
        <span
          className="
            inline-flex items-center justify-center
            w-5 h-5 shrink-0
            scale-90 transition-transform duration-200 ease-out
            group-hover:scale-100 group-focus-within:scale-100
          "
        >
          <SmallRoundButton />
        </span>
      </div>
    </div>
  );
}

export default TabHoverActions;
