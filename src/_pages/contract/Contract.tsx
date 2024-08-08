'use client';
import { useState } from 'react';

import { Button } from '@/shared/components';
import { MainWrapper } from '@/shared/components/main-wrapper/MainWrapper';

type PropTypes = {
  id?: string;
};
export const Contract = ({ id }: PropTypes) => {
  const [contractText, setContractText] = useState('');

  if (!id) {
    //new contract page
    const submitButton = <Button onClick={() => alert('Signed')} title="Sign" />;

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
          className="resize-none h-[459px] max-h-[459px] w-full p-2 border rounded border-white overflow-y-scroll text-black"
        />
      </MainWrapper>
    );
  }
  return null;
};
