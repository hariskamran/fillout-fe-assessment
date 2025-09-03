import React, { ReactElement } from 'react';

function MobileRestriction(): ReactElement {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-black/60 md:hidden"
      aria-live="assertive"
      aria-modal="true"
      role="dialog"
    >
      <div className="w-full max-w-md rounded-xl bg-white p-6 text-center shadow-xl">
        <div className="mb-2 text-lg font-bold sm:text-xl">
          Please open on a desktop
        </div>
        <div className="text-sm text-gray-700 sm:text-base">
          This experience is optimized for larger screens. For the best results,
          please use a laptop or desktop computer.
        </div>
      </div>
    </div>
  );
}

export default MobileRestriction;
