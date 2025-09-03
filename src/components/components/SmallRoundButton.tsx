import React, { ReactElement } from 'react';

import Image from 'next/image';

function SmallRoundButton({ onClick }: { onClick?: () => void }): ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-5 h-5 flex items-center cursor-pointer justify-center rounded-full bg-background text-foreground shadow-md border border-tab-border hover:bg-tab-button-background/15 transition-colors duration-150"
    >
      <Image src={`/icons/add.svg`} alt={'add'} width={14} height={14} />
    </button>
  );
}

export default SmallRoundButton;
