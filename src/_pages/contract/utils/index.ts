import { Contract, User } from '@/shared/types';

export const isContractSigned = (contract: Contract, user: User) => {
  if (!contract || !user) return false;

  const isSigned = contract.signees.filter((s) => s.id === user.id).length > 0;
  return isSigned;
};
