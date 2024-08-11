'use client';
import { Button, MainWrapper } from '@/shared/components';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

export const PasteQR = () => {
  const [contractCode, setContractCode] = useState('');
  const router = useRouter();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContractCode(e.target.value);
  };

  const submitButton = (
    <Button
      onClick={() => {
        router.push(`/contract/${contractCode}`, { scroll: false });
      }}
      title="Open"
    />
  );

  return (
    <MainWrapper title="Open contract link" submitButton={submitButton}>
      <div className="h-full sm:h-[459px] sm:max-h-[459px] w-full p-2 rounded text-black text-2xl flex items-start justify-center">
        <div className="flex flex-col">
          <input
            id="pasteLink"
            type="text"
            className="resize-none w-full p-2 border-0 outline-0 rounded border-none overflow-hidden text-black text-2xl"
            placeholder="Paste code here"
            onChange={handleOnChange}
          />
        </div>
      </div>
    </MainWrapper>
  );
};
