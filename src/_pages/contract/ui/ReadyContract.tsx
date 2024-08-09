import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button, MainWrapper } from '@/shared/components';
import { useAppSelector } from '@/shared/store/hook';
import { contractSelector } from '@/shared/store/selector/contract';
import { toastSuccess } from '@/shared/utils/toast';

export const ReadyContract = () => {
  const [contractText, setContractText] = useState('');

  const router = useRouter();
  const contractTextSelector = useAppSelector(contractSelector);

  useEffect(() => {
    setContractText(contractTextSelector.text);
  }, []);

  const submitButton = (
    <Button
      onClick={() => {
        toastSuccess('Shared');
        router.push('/contract/share', { scroll: false });
      }}
      title="Share"
    />
  );

  return (
    <MainWrapper title="Contract" submitButton={submitButton}>
      <div
        style={{ scrollbarWidth: 'none' }}
        className="resize-none h-full sm:h-[459px] sm:max-h-[459px] w-full p-2 border-0 outline-0 rounded border-none overflow-y-scroll text-black text-2xl"
      >
        {contractText}
      </div>
    </MainWrapper>
  );
};
