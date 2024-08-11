'use client';
import { client } from '@/shared/const';
import { Logo } from '@/shared/icon';
import { EAS__factory } from '@ethereum-attestation-service/eas-contracts';
import { SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';
import { Hex, getContract, prepareContractCall, readContract } from 'thirdweb';
import { baseSepolia } from 'thirdweb/chains';
import { ConnectButton, TransactionButton, useActiveAccount } from 'thirdweb/react';
import { TransactionReceipt } from 'viem';

const schemaEncoder = new SchemaEncoder('string name, string contract');
const contract = getContract({
  client,
  chain: baseSepolia,
  address: process.env.NEXT_PUBLIC_EAS_CONTRACT_ADDRESS as Hex,
  abi: EAS__factory.abi,
});

function createAttestation(recipient: Hex) {
  const data = schemaEncoder.encodeData([
    { name: 'name', value: 'Test User', type: 'string' },
    { name: 'contract', value: 'My agreeement', type: 'string' },
  ]) as Hex;
  return prepareContractCall({
    contract,
    method: 'attest',
    params: [
      {
        schema: process.env.NEXT_PUBLIC_CONTRACT_SCHEMA_ID as Hex,
        data: {
          recipient,
          expirationTime: 0n,
          revocable: false,
          refUID: '0x0000000000000000000000000000000000000000000000000000000000000000',
          data,
          value: 0n,
        },
      },
    ],
  });
}

async function getAttestation(uid: string) {
  const { data, time, recipient } = await readContract({
    contract,
    method: 'getAttestation',
    params: [uid as Hex],
  });
  const fields = schemaEncoder
    .decodeData(data)
    .reduce((memo, { name, value }) => ({ ...memo, [name]: value.value }), {});
  return {
    ...fields,
    recipient,
    createdAt: new Date(Number(time)),
  };
}

async function handleTransaction(receipt: TransactionReceipt) {
  const address = process.env.NEXT_PUBLIC_EAS_CONTRACT_ADDRESS as Hex;
  const targetLog = receipt.logs.find((log) => log.address.toLowerCase() === address.toLowerCase());
  if (targetLog) {
    const data = await getAttestation(targetLog.data);
    console.log(data);
  }
  return null;
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
