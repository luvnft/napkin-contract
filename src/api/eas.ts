import { ethers } from 'ethers';

import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';

async function attest(encodedData: string, schemaUID: string, refUID?: string) {
  const privateKey = process.env.PRIVATE_KEY || 'TEST_KEY';
  const easContractAddress = process.env.EAS_CONTRACT_ADDRESS || 'TEST_ADDRESS';
  const eas = new EAS(easContractAddress);
  const provider = ethers.getDefaultProvider('https://sepolia.base.org');
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

export async function createContractAttestation(drafterID: string, contract: string) {
  const schemaUID = process.env.CONTRACT_SCHEMA_ID || 'TEST_ID';
  const schemaEncoder = new SchemaEncoder('string drafterID,string contract');
  const encodedData = schemaEncoder.encodeData([
    { name: 'drafterID', value: drafterID, type: 'string' },
    { name: 'contract', value: contract, type: 'string' },
  ]);
  return await attest(encodedData, schemaUID);
}

export async function signContractAttestation(signatoryID: string, uidContract: string) {
  const schemaUID = process.env.SIGNATORY_SCHEMA_ID || 'TEST_ID';
  const schemaEncoder = new SchemaEncoder('string signatoryID');
  const encodedData = schemaEncoder.encodeData([
    { name: 'signatoryID', value: signatoryID, type: 'string' },
  ]);
  return await attest(encodedData, schemaUID, uidContract);
}

export async function findContractAttestation(uid: string) {
  const easContractAddress = process.env.EAS_CONTRACT_ADDRESS || 'TEST_ADDRESS';
  const eas = new EAS(easContractAddress);
  const provider = ethers.getDefaultProvider('https://sepolia.base.org');
  // @ts-ignore
  eas.connect(provider);
  const attestation = await eas.getAttestation(uid);
  const schemaEncoder = new SchemaEncoder('string drafterID,string contract');
  return schemaEncoder.decodeData(attestation.data);
}

// const uidContract = await createContractAttestation('0xDrafter_ID', 'Generated contract body');
// const uidSignatory = await signContractAttestation('0xSignatory_ID', uidContract);
// console.log(uidContract);
// console.log(uidSignatory);
// const attestation = await findContractAttestation('0x4a3bd04a93bbff279469ec11627233793ed130b33585243d15ca74b228a60220');
// console.log(attestation);
