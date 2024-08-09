import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button, MainWrapper } from '@/shared/components';
import { useAppSelector } from '@/shared/store/hook';
import { contractSelector } from '@/shared/store/selector/contract';

export const ReviewContract = () => {
  const [contractText, setContractText] = useState('');

  const router = useRouter();
  const contractTextSelector = useAppSelector(contractSelector);

  useEffect(() => {
    setContractText(contractTextSelector.text);
  }, []);

  const submitButton = (
    <Button
      onClick={() => {
        alert('Request signing');
        router.push('/contract/share', { scroll: false });
      }}
      title="Sign"
    />
  );

  return (
    <MainWrapper title="Request signing" submitButton={submitButton}>
      <div className="resize-none h-full sm:h-80 sm:max-h-80 w-full p-2 border-0 outline-0 rounded border-none overflow-y-scroll text-black text-2xl">
        {contractText}
      </div>
    </MainWrapper>
  );
};
