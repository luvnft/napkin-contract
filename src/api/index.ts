export const postContractAttestation = async (accountAddress: string, contractLabel: string) => {
  try {
    const response = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contract-attestation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accountAddress, contractLabel }),
    });

    return response;
  } catch (error) {
    console.error(`contract attestation creation failed: ${error}`);
    return new Response(null, {
      status: 500,
    });
  }
};
