'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ConnectButton, useActiveAccount } from 'thirdweb/react';

import { createContractAttestation } from '@/api/eas';
import { Button } from '@/shared/components';
import { MainWrapper } from '@/shared/components/main-wrapper/MainWrapper';
import { appName, appUrl, client } from '@/shared/const';
import { toastSuccess } from '@/shared/utils/toast';

export const Authentication = () => {
  const router = useRouter();
  const account = useActiveAccount();

  useEffect(() => {
    if (!account?.address) return;

    createContractAttestation(account?.address, 'Our agreeement terms')
      .then(() => {
        // const newAttestationUID = response
        toastSuccess('new contract attestation created');
      })
      .catch((e) => {
        console.error(`Creation of contract attestation failed: ${e}`);
      });
  }, [account?.address]);

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
