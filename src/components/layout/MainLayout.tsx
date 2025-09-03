import React, { PropsWithChildren, ReactElement } from 'react';

function MainLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <div className="w-full h-screen bg-background-shaded flex items-center justify-center">
      {children}
    </div>
  );
}

export default MainLayout;
