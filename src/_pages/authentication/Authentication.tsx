'use client';
import { extractAttesttionUid, prepareCreateAttestation } from '@/api/eas-thirdweb';
import { Button } from '@/shared/components';
import { MainWrapper } from '@/shared/components/main-wrapper/MainWrapper';
import { client } from '@/shared/const';
import { useAppSelector } from '@/shared/store/hook';
import { contractSelector } from '@/shared/store/selector/contract';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Hex } from 'thirdweb';
import { baseSepolia } from 'thirdweb/chains';
import { ConnectButton, TransactionButton, useActiveAccount } from 'thirdweb/react';
import { TransactionReceipt } from 'viem';

const btnStyle = {
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
};

export const Authentication = () => {
  const router = useRouter();
  const account = useActiveAccount();
  const initialized = useRef(false);
  const [attestationUid, setAttestationUid] = useState('');
  const currentContract = useAppSelector(contractSelector);

  useEffect(() => {
    if (process.env.NODE_ENV == 'development' && !initialized.current) {
      initialized.current = true;
    }
  }, []);

  function handleTransaction(receipt: TransactionReceipt) {
    const uid = extractAttesttionUid(receipt);
    setAttestationUid(uid);
  }

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
          chains={[baseSepolia]}
          accountAbstraction={{
            chain: baseSepolia,
            sponsorGas: true,
          }}
          theme="light"
          // appMetadata={{
          //   name: appName,
          //   url: appUrl,
          // }}
          connectButton={{
            label: 'Connect Wallet',
            style: btnStyle,
          }}
        />
        {account && !attestationUid && (
          <TransactionButton
            transaction={() => prepareCreateAttestation(account.address as Hex, currentContract)}
            onTransactionConfirmed={handleTransaction}
            onError={console.error}
            style={btnStyle}
          >
            Create Attestation
          </TransactionButton>
        )}
        {attestationUid ? (
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
