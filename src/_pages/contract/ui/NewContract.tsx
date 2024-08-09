import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button, MainWrapper } from '@/shared/components';
import { useAppDispatch, useAppSelector } from '@/shared/store/hook';
import { contractSelector } from '@/shared/store/selector/contract';
import { initialize, updateContract } from '@/shared/store/slice/contract';

export const NewContract = () => {
  const [contractText, setContractText] = useState('');

  const router = useRouter();
  const dispatch = useAppDispatch();
  const contract = useAppSelector(contractSelector);

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    setContractText(contract.text);
  }, [contract]);

  const submitButton = (
    <Button
      onClick={() => {
        dispatch(
          updateContract({
            data: {
              id: '1',
              text: contractText,
              dateCreated: new Date().toISOString(),
              signees: [],
            },
          }),
        );
        alert('Signed');
        router.push('/auth', { scroll: false });
      }}
      title="Sign"
    />
  );

  return (
    <MainWrapper title="Fill Contract" submitButton={submitButton}>
      <textarea
        id="createPostTextarea"
        placeholder={'What do you want agree upon?'}
        onChange={(e) => {
          setContractText(e.target.value);
        }}
        value={contractText}
        maxLength={5000}
        className="resize-none h-full sm:h-[459px] sm:max-h-[459px] w-full p-2 border-0 outline-0 rounded border-none overflow-hidden text-black text-2xl"
      />
    </MainWrapper>
  );
};
