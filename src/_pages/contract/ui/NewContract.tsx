import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button, MainWrapper } from '@/shared/components';
import { useAppDispatch, useAppSelector } from '@/shared/store/hook';
import { contractSelector } from '@/shared/store/selector/contract';
import { userSelector } from '@/shared/store/selector/user';
import { initializeContract, updateContract } from '@/shared/store/slice/contract';
import { toastSuccess } from '@/shared/utils/toast';
import { LoginForm } from '@/widgets';

export const NewContract = () => {
  const [contractText, setContractText] = useState('');

  const router = useRouter();
  const dispatch = useAppDispatch();
  const contract = useAppSelector(contractSelector);
  const currentUser = useAppSelector(userSelector);
  const [isLoginShown, setIsLoginShown] = useState(false);

  useEffect(() => {
    dispatch(initializeContract());
  }, [dispatch]);

  useEffect(() => {
    setContractText(contract.text);
  }, [contract]);

  const handleSignContract = () => {
    if (!currentUser.id) {
      setIsLoginShown(true);
      return;
    }

    dispatch(
      updateContract({
        data: {
          id: uuidv4(),
          text: contractText,
          dateCreated: new Date().toISOString(),
          signees: [{ ...currentUser, dateSigned: new Date().toISOString() }],
        },
      }),
    );
    toastSuccess('Signed');
    router.push('/auth', { scroll: false });
  };

  const submitButton = <Button onClick={handleSignContract} title="Sign" />;

  return (
    <MainWrapper title="Fill Contract" submitButton={submitButton}>
      <div className="flex flex-col items-start justify-center">
        <label htmlFor="contractText" className="text-black text-base px-2">
          Contract text:
        </label>
        <textarea
          id="contractText"
          placeholder={''}
          onChange={(e) => {
            setContractText(e.target.value);
          }}
          value={contractText}
          maxLength={5000}
          className="resize-none h-full sm:h-[435px] sm:max-h-[435px] w-full p-2 border-0 outline-0 rounded border-none overflow-hidden text-black text-2xl"
        />
      </div>
      <LoginForm isVisible={isLoginShown} setIsVisible={setIsLoginShown} />
    </MainWrapper>
  );
};
