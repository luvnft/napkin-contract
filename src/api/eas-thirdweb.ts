import { client } from '@/shared/const';
import { Contract } from '@/shared/types';
import { EAS__factory } from '@ethereum-attestation-service/eas-contracts';
import { SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';
import axios from 'axios';
import { Hex, getContract, prepareContractCall, readContract } from 'thirdweb';
import { baseSepolia } from 'thirdweb/chains';
import { TransactionReceipt } from 'viem';

const createSchemaEncoder = new SchemaEncoder('string name, string contract');
const signSchemaEncoder = new SchemaEncoder('string name');
const contract = getContract({
  client,
  chain: baseSepolia,
  address: process.env.NEXT_PUBLIC_EAS_CONTRACT_ADDRESS as Hex,
  abi: EAS__factory.abi,
});

export function prepareCreateAttestation(recipient: Hex, content: Contract) {
  const data = createSchemaEncoder.encodeData([
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

export function prepareSignAttestation(recipient: Hex, refUID: Hex, name: string) {
  const data = signSchemaEncoder.encodeData([{ name: 'name', value: name, type: 'string' }]) as Hex;
  return prepareContractCall({
    contract,
    method: 'attest',
    params: [
      {
        schema: process.env.NEXT_PUBLIC_SIGNATORY_SCHEMA_ID as Hex,
        data: {
          recipient,
          expirationTime: 0n,
          revocable: false,
          refUID,
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
  return createSchemaEncoder
    .decodeData(data)
    .reduce((memo, { name, value }) => ({ ...memo, [name]: value.value }), {
      uid,
      recipient,
      createdAt: new Date(Number(time)),
    });
}

export async function fetchSignatureAttestations(uid: Hex) {
  const url = 'https://base-sepolia.easscan.org/graphql';
  const schemaId = process.env.NEXT_PUBLIC_SIGNATORY_SCHEMA_ID as Hex;
  const data = {
    query: `query Query {
    attestations(
      where: {
        AND: [
          {
            refUID: {
              equals: "${uid}"
            }
            schemaId: {
              equals: "${schemaId}"
            }
          }
        ]
      }
    ) {
      id
      data
      recipient
      time
    }
  }
`,
    variables: {},
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  // try {
  const response = await axios.post(url, data, { headers });
  // @ts-ignore
  return response.data.data.attestations.map(({ id, data, recipient, time }) =>
    signSchemaEncoder
      .decodeData(data)
      .reduce((memo, { name, value }) => ({ ...memo, [name]: value.value }), {
        uid: id,
        recipient,
        createdAt: new Date(time * 1000),
      }),
  );
  // } catch (error) {
  //   console.error('Error fetching attestations:', error);
  //   return null;
  // }
}
