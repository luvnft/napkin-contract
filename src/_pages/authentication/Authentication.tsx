'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ConnectButton, useActiveAccount } from 'thirdweb/react';

import { postContractAttestation } from '@/api';
import { Button, Spinner } from '@/shared/components';
import { MainWrapper } from '@/shared/components/main-wrapper/MainWrapper';
import { appName, appUrl, client } from '@/shared/const';
import { useAppSelector } from '@/shared/store/hook';
import { contractSelector } from '@/shared/store/selector/contract';
import { toastError, toastSuccess } from '@/shared/utils/toast';

export const Authentication = () => {
  const router = useRouter();
  const account = useActiveAccount();
  const initialized = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [attestationUid, setAttestationUid] = useState('');
  const currentContract = useAppSelector(contractSelector);

  useEffect(() => {
    if (process.env.NODE_ENV == 'development' && !initialized.current) {
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    if (!initialized.current && process.env.NODE_ENV === 'development') return;
    if (!account?.address) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    postContractAttestation(account.address, currentContract)
      .then((uid) => {
        setAttestationUid(uid);
        toastSuccess('new contract attestation created');
      })
      .catch((e) => {
        console.error(`Creation of contract attestation failed: ${e}`);
        toastError('new contract attestation failed');
      })
      .finally(() => setIsLoading(false));
  }, [account?.address, currentContract]);

  const submitButton = (
    <Button
      onClick={() => {
        router.push(`/contract/${attestationUid}`, { scroll: false });
      }}
      title="Next"
      disabled={!attestationUid}
    />
  );

  return (
    <MainWrapper title="Sign the contract" submitButton={submitButton}>
      <div className="flex flex-col items-center justify-start p-10 gap-7">
        <ConnectButton
          client={client}
          theme={'dark'}
          appMetadata={{
            name: appName,
            url: appUrl,
          }}
          connectButton={{
            label: 'Connect Wallet',
            style: {
              backgroundColor: '#DC0203',
              color: 'white',
              fontSize: '1.25rem',
              fontWeight: '500',
              width: '14rem',
              height: '3rem',
              borderRadius: '0.75rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            },
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
            Contract has been recorded{' '}
            <a
              href={`https://base-sepolia.easscan.org/attestation/view/${attestationUid}`}
              target="_blank"
              className="text-indigo-300 hover:text-indigo-500 underline"
              rel="noreferrer"
            >
              on-chain
            </a>
            .
          </span>
        ) : null}
      </div>
    </MainWrapper>
  );
};
