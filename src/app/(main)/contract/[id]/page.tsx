import { Contract } from '@/_pages';

export default function ContractPage({ params }: { params: { id: string } }) {
  return <Contract pageType="ready" id={params.id} />;
}
