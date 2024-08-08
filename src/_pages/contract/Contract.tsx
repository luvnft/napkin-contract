'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button, MainWrapper } from '@/shared/components';
import { useAppDispatch } from '@/shared/store/hook';
import { initialize, updateContract } from '@/shared/store/slice/contract';

type PropTypes = {
  id?: string;
};
export const Contract = ({ id }: PropTypes) => {
  const [contractText, setContractText] = useState('');
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initialize());
  }, []);

  if (!id) {
    //new contract page
    const submitButton = (
      <Button
        onClick={() => {
          dispatch(updateContract({ data: { text: contractText } }));
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
  }
  return null;
};
