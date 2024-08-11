import { Button, MainWrapper } from '@/shared/components';
import { useAppDispatch, useAppSelector } from '@/shared/store/hook';
import { contractSelector } from '@/shared/store/selector/contract';
import { initializeContract, updateContract } from '@/shared/store/slice/contract';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const NewContract = () => {
  const [contractText, setContractText] = useState('');
  const [fullName, setFullName] = useState('');

  const router = useRouter();
  const dispatch = useAppDispatch();
  const contract = useAppSelector(contractSelector);

  useEffect(() => {
    dispatch(initializeContract());
  }, [dispatch]);

  useEffect(() => {
    setFullName(contract.name);
    setContractText(contract.text);
  }, [contract]);

  const handleSignContract = () => {
    dispatch(
      updateContract({
        data: {
          name: fullName,
          text: contractText,
        },
      }),
    );
    // toastSuccess('Signed');
    router.push('/auth', { scroll: false });
  };

  const submitButton = <Button onClick={handleSignContract} title="Sign" />;

  return (
    <MainWrapper title="Create Contract" submitButton={submitButton}>
      <div className="flex flex-col items-start justify-center">
        <textarea
          id="fullName"
          placeholder={'Your name'}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          value={fullName}
          maxLength={5000}
          className="resize-none h-10 w-full p-2 pb-5 border-0 outline-0 rounded border-none overflow-hidden text-black text-2xl"
        />
        <textarea
          id="contractText"
          placeholder={'Contract terms'}
          onChange={(e) => {
            setContractText(e.target.value);
          }}
          value={contractText}
          maxLength={5000}
          className="resize-none h-full sm:h-[359px] sm:max-h-[359px] w-full p-2 border-0 outline-0 rounded border-none overflow-hidden text-black text-2xl"
        />
      </div>
    </MainWrapper>
  );
};
