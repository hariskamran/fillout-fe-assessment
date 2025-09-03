import React, { ReactElement } from 'react';

function DottedLines(): ReactElement {
  return (
    <div className="w-5 h-px bg-[repeating-linear-gradient(to_right,_#C0C0C0_0_3px,_transparent_3px_6px)]" />
  );
}

export default DottedLines;
