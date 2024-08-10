import { NextResponse } from 'next/server';

import { createContractAttestation } from '@/api/eas';

export async function POST(request: Request) {
  try {
    const { accountAddress, contractLabel } = await request.json();

    const attestationUID = await createContractAttestation(accountAddress, contractLabel);

    return NextResponse.json(JSON.stringify(attestationUID));
  } catch (e) {
    console.error(`Creation of contract attestation failed: ${e}`);
    return new Response(null, {
      status: 500,
    });
  }
}
