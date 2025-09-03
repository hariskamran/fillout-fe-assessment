'use client';

import React, { ReactElement } from 'react';

import TabButton from '@/components/components/TabButton';
import TabHoverActions from '@/components/components/TabHoverActions';
import DottedLines from '@/components/components/ui/DottedLines';
import { PAGES } from '@/components/data';
import useAppStore from '@/stores/useAppStore';
import { Page } from '@/types';

function Container(): ReactElement {
  const { page, setPage } = useAppStore();

  return (
    <div className="w-full max-w-[1100px] h-[72px] bg-white shadow-md rounded-md px-5">
      <div className="w-auto h-full flex items-center relative overflow-hidden">
        {PAGES.map(
          ({ icon, slug, name }: Page): ReactElement => (
            <div key={slug} className="group flex items-center">
              <TabButton
                onClick={() => {
                  setPage(slug);
                }}
                variant={page === slug ? 'active' : 'default'}
                icon={icon}
                text={name}
              />

              {/* Hover inline controls between tab and divider */}
              <TabHoverActions />

              <div className="shrink-0 -ml-px">
                <DottedLines />
              </div>
            </div>
          ),
        )}
        <TabButton variant="active" icon="add" text="Add Page" />
      </div>
    </div>
  );
}

export default Container;
