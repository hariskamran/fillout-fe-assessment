import React, { ReactElement } from 'react';

import SmallRoundButton from '@/components/components/SmallRoundButton';
import DottedLines from '@/components/components/ui/DottedLines';

function TabHoverActions({
  onInsert,
}: {
  onInsert?: () => void;
}): ReactElement {
  return (
    <div
      className="
        flex items-center
        w-0 transition-[width] duration-200 ease-out
        group-hover:w-[40px] group-has-[:focus-visible]:w-[40px]
      "
      aria-hidden="true"
    >
      <div
        className="
          flex items-center
          opacity-0 pointer-events-none
          transition-opacity duration-150 ease-out
          group-hover:opacity-100 group-hover:pointer-events-auto
          group-has-[:focus-visible]:opacity-100 group-has-[:focus-visible]:pointer-events-auto
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
            group-hover:scale-100 group-has-[:focus-visible]:scale-100
          "
        >
          <SmallRoundButton onClick={onInsert} />
        </span>
      </div>
    </div>
  );
}

export default TabHoverActions;
