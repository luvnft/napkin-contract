'use client';
import { ConnectButton } from 'thirdweb/react';

import { MainWrapper } from '@/shared/components/main-wrapper/MainWrapper';
import { appName, appUrl, client } from '@/shared/const';

export const Authentication = () => {
  return (
    <MainWrapper title="Authentication">
      <div className="flex flex-col items-center justify-start p-10">
        <ConnectButton
          client={client}
          appMetadata={{
            name: appName,
            url: appUrl,
          }}
        />
      </div>
    </MainWrapper>
  );
};
