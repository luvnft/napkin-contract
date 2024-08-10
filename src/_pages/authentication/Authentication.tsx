'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ConnectButton, useActiveAccount } from 'thirdweb/react';

import { postContractAttestation } from '@/api';
import { Button, Spinner } from '@/shared/components';
import { MainWrapper } from '@/shared/components/main-wrapper/MainWrapper';
import { appName, appUrl, client } from '@/shared/const';
import { toastError, toastSuccess } from '@/shared/utils/toast';

export const Authentication = () => {
  const router = useRouter();
  const account = useActiveAccount();
  const initialized = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!account?.address) return;

    if (process.env.NODE_ENV == 'development' && !initialized.current) {
      initialized.current = true;
      return;
    }
    setIsLoading(true);

    postContractAttestation(account?.address, 'Our agreeement terms')
      .then(() => {
        // const newAttestationUID = response
        toastSuccess('new contract attestation created');
      })
      .catch((e) => {
        console.error(`Creation of contract attestation failed: ${e}`);
        toastError('new contract attestation failed');
      })
      .finally(() => setIsLoading(false));
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
      <div className="flex flex-col items-center justify-start p-10 gap-7">
        <ConnectButton
          client={client}
          appMetadata={{
            name: appName,
            url: appUrl,
          }}
        />
        {isLoading && (
          <div className="flex flex-col gap-3">
            <span>Creating attestation...</span>
            <Spinner />
          </div>
        )}
      </div>
    </MainWrapper>
  );
};
