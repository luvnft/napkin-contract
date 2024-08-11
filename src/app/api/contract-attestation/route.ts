import { NextResponse } from 'next/server';

import { createContractAttestation } from '@/api/eas';

export async function POST(request: Request) {
  try {
    const { /* address, */ contract } = await request.json();
    const uid = await createContractAttestation(contract.name, contract.text);
    return NextResponse.json(JSON.stringify(uid));
  } catch (e) {
    console.error(`Creation of contract attestation failed: ${e}`);
    return new Response(null, {
      status: 500,
    });
  }
}
