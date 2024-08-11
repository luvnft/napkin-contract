import { client } from '@/shared/const';
import { Contract } from '@/shared/types';
import { EAS__factory } from '@ethereum-attestation-service/eas-contracts';
import { SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';
import { Hex, getContract, prepareContractCall, readContract } from 'thirdweb';
import { baseSepolia } from 'thirdweb/chains';
import { TransactionReceipt } from 'viem';

const schemaEncoder = new SchemaEncoder('string name, string contract');
const contract = getContract({
  client,
  chain: baseSepolia,
  address: process.env.NEXT_PUBLIC_EAS_CONTRACT_ADDRESS as Hex,
  abi: EAS__factory.abi,
});

export function prepareCreateAttestation(recipient: Hex, content: Contract) {
  const data = schemaEncoder.encodeData([
    { name: 'name', value: content.name, type: 'string' },
    { name: 'contract', value: content.text, type: 'string' },
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

export function extractAttesttionUid(receipt: TransactionReceipt) {
  const address = process.env.NEXT_PUBLIC_EAS_CONTRACT_ADDRESS as Hex;
  const targetLog = receipt.logs.find((log) => log.address.toLowerCase() === address.toLowerCase());
  return targetLog?.data as Hex;
}

export async function fetchAttestation(uid: Hex) {
  const { data, time, recipient } = await readContract({
    contract,
    method: 'getAttestation',
    params: [uid],
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
