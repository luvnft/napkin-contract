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
  const [attestationUid, setAttestationUid] = useState('');

  useEffect(() => {
    if (process.env.NODE_ENV == 'development' && !initialized.current) {
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    if (!initialized.current) return;

    if (!account?.address) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    postContractAttestation(account.address, 'Our agreeement terms')
      .then((uid) => {
        setAttestationUid(uid);
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
          <div className="flex flex-col gap-3 text-black">
            <span>Creating attestation...</span>
            <Spinner />
          </div>
        )}
        {!isLoading && attestationUid ? (
          <span className="text-black">
            Attestation created, click{' '}
            <a
              href={`https://base-sepolia.easscan.org/attestation/view/${attestationUid}`}
              className="text-indigo-300 hover:text-indigo-500 underline"
            >
              here
            </a>{' '}
            to open it.
          </span>
        ) : null}
      </div>
    </MainWrapper>
  );
};
