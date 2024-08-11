import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button, MainWrapper, Signees } from '@/shared/components';
import { useAppSelector } from '@/shared/store/hook';
import { contractSelector } from '@/shared/store/selector/contract';
import { userSelector } from '@/shared/store/selector/user';
import { toastSuccess } from '@/shared/utils/toast';

import { isContractSigned } from '../utils';

export const ReviewContract = () => {
  const [contractText, setContractText] = useState('');

  const router = useRouter();
  const currentContract = useAppSelector(contractSelector);
  const currentUser = useAppSelector(userSelector);

  const [isSigned, setIsSigned] = useState(false);

  useEffect(() => {
    if (!currentContract.id) {
      return;
    }

    setContractText(currentContract.text);
    const isSigned = isContractSigned(currentContract, currentUser);
    setIsSigned(isSigned);
  }, [currentContract, currentContract.id, currentUser]);

  const submitButton = (
    <Button
      onClick={() => {
        toastSuccess('Request signing');
        router.push('/contract/share', { scroll: false });
      }}
      title={isSigned ? 'Next' : 'Sign'}
    />
  );

  return (
    <MainWrapper title="Request signing" submitButton={submitButton}>
      <div
        className="resize-none h-full sm:h-64 sm:max-h-64 w-full p-2 border-0 outline-0 rounded border-none overflow-y-scroll text-black text-2xl"
        style={{ scrollbarWidth: 'none' }}
      >
        {contractText}
      </div>
      <Signees />
    </MainWrapper>
  );
};
