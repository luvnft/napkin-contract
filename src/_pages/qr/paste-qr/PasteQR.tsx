'use client';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

import { Button, MainWrapper } from '@/shared/components';
import { useAppDispatch } from '@/shared/store/hook';
import { initializeBob } from '@/shared/store/slice/user';
import { toastSuccess } from '@/shared/utils/toast';

export const PasteQR = () => {
  const [contractLink, setContractLink] = useState('');
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeBob());
  }, [dispatch]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContractLink(e.target.value);
  };

  const submitButton = (
    <Button
      onClick={() => {
        toastSuccess('Open');
        router.push(contractLink, { scroll: false });
      }}
      title="Open"
    />
  );

  return (
    <MainWrapper title="Open contract link" submitButton={submitButton}>
      <div className="h-full sm:h-[459px] sm:max-h-[459px] w-full p-2 rounded text-black text-2xl flex items-start justify-center">
        <div className="flex flex-col">
          <label htmlFor="pasteLink" className="text-black text-base px-2">
            Link:
          </label>

          <input
            id="pasteLink"
            type="text"
            className="resize-none w-full p-2 border-0 outline-0 rounded border-none overflow-hidden text-black text-2xl"
            placeholder=""
            onChange={handleOnChange}
          />
        </div>
      </div>
    </MainWrapper>
  );
};
