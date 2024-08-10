export const postContractAttestation = async (accountAddress: string, contractLabel: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contract-attestation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accountAddress, contractLabel }),
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
