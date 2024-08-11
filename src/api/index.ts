import { Contract } from '@/shared/types';

export const postContractAttestation = async (address: string, contract: Contract) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contract-attestation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address, contract }),
    });

    if (response.ok) {
      const data = await response.json();
      return JSON.parse(data);
    }
    throw new Error(`${response.status}: ${response.statusText}`);
  } catch (error) {
    console.error(`contract attestation creation failed: ${error}`);
    throw error;
  }
};
