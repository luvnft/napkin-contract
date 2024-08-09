'use client';
import { useRouter } from 'next/navigation';
import { ConnectButton } from 'thirdweb/react';

import { Button } from '@/shared/components';
import { MainWrapper } from '@/shared/components/main-wrapper/MainWrapper';
import { appName, appUrl, client } from '@/shared/const';

export const Authentication = () => {
  const router = useRouter();
  const submitButton = (
    <Button
      onClick={() => {
        router.push('/contract/review', { scroll: false });
      }}
      title="Next"
    />
  );
  return (
    <MainWrapper title="Authentication" submitButton={submitButton}>
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
