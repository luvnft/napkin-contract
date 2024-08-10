import { createContractAttestation } from '@/api/eas';

export async function POST(request: Request) {
  try {
    const { accountAddress, contractLabel } = await request.json();

    await createContractAttestation(accountAddress, contractLabel);

    return new Response(null, {
      status: 204,
    });
  } catch (e) {
    console.error(`Creation of contract attestation failed: ${e}`);
    return new Response(null, {
      status: 500,
    });
  }
}
