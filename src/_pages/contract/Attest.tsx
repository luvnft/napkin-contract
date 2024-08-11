'use client';
import { createAttestation, extractAttesttionUid, fetchAttestation } from '@/api/eas-thirdweb';
import { client } from '@/shared/const';
import { Logo } from '@/shared/icon';
import { Hex } from 'thirdweb';
import { baseSepolia } from 'thirdweb/chains';
import { ConnectButton, TransactionButton, useActiveAccount } from 'thirdweb/react';
import { TransactionReceipt } from 'viem';

async function handleTransaction(receipt: TransactionReceipt) {
  const uid = extractAttesttionUid(receipt);
  const data = await fetchAttestation(uid);
  console.log(data);
}

export const Attest = () => {
  const account = useActiveAccount();
  return (
    <main className="flex flex-col gap-7 items-center justify-center">
      <div className="h-[150px] flex items-center justify-center">
        <Logo />
      </div>
      <ConnectButton
        client={client}
        chains={[baseSepolia]}
        accountAbstraction={{
          chain: baseSepolia,
          sponsorGas: true,
        }}
      />
      {account && (
        <TransactionButton
          transaction={() => createAttestation(account.address as Hex)}
          onTransactionConfirmed={handleTransaction}
          onError={console.error}
        >
          Create Attestation
        </TransactionButton>
      )}
    </main>
  );
};
