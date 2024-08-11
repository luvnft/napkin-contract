import { ethers } from 'ethers';

import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';

const ETHERS_NETWORK = 'https://sepolia.base.org';

async function attest(encodedData: string, schemaUID: string, refUID?: string) {
  const privateKey = process.env.PRIVATE_KEY as string;
  const easContractAddress = process.env.NEXT_PUBLIC_EAS_CONTRACT_ADDRESS as string;
  const eas = new EAS(easContractAddress);
  const provider = ethers.getDefaultProvider(ETHERS_NETWORK);
  const signer = new ethers.Wallet(privateKey, provider);
  // Signer must be an ethers-like signer.
  eas.connect(signer);
  const transaction = await eas.attest({
    schema: schemaUID,
    data: {
      recipient: signer.address,
      expirationTime: 0n,
      revocable: false,
      data: encodedData,
      refUID: refUID || '0x0000000000000000000000000000000000000000000000000000000000000000',
    },
  });
  const newAttestationUID = await transaction.wait();
  return newAttestationUID;
}

export async function createContractAttestation(name: string, contract: string) {
  const schemaUID = process.env.NEXT_PUBLIC_CONTRACT_SCHEMA_ID as string;
  const schemaEncoder = new SchemaEncoder('string name,string contract');
  const encodedData = schemaEncoder.encodeData([
    { name: 'name', value: name, type: 'string' },
    { name: 'contract', value: contract, type: 'string' },
  ]);
  return await attest(encodedData, schemaUID);
}

export async function signContractAttestation(name: string, uidContract: string) {
  const schemaUID = process.env.NEXT_PUBLIC_SIGNATORY_SCHEMA_ID as string;
  const schemaEncoder = new SchemaEncoder('string name');
  const encodedData = schemaEncoder.encodeData([{ name: 'name', value: name, type: 'string' }]);
  return await attest(encodedData, schemaUID, uidContract);
}

export async function findContractAttestation(uid: string) {
  const easContractAddress = process.env.NEXT_PUBLIC_EAS_CONTRACT_ADDRESS as string;
  const eas = new EAS(easContractAddress);
  const provider = ethers.getDefaultProvider(ETHERS_NETWORK);
  // @ts-ignore
  eas.connect(provider);
  const attestation = await eas.getAttestation(uid);
  const schemaEncoder = new SchemaEncoder('string name,string contract');
  return {
    createdAt: attestation.time,
    recipient: attestation.recipient,
    data: schemaEncoder.decodeData(attestation.data),
  };
}
