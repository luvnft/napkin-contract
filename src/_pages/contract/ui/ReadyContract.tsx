import { Button, MainWrapper, Signees } from '@/shared/components';
import { useAppSelector } from '@/shared/store/hook';
import { contractSelector } from '@/shared/store/selector/contract';
import { toastSuccess } from '@/shared/utils/toast';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type PropTypes = {
  id: string | undefined;
};

const getTitle = (isFound: boolean, isSigned: boolean) => {
  if (!isFound) return 'Back';
  return isSigned ? 'Share' : 'Sign';
};

export const ReadyContract = ({ id }: PropTypes) => {
  const [contractText, setContractText] = useState('');
  const [isSigned, setIsSigned] = useState(false);
  const [isFound, setIsFound] = useState(false);
  const currentContract = useAppSelector(contractSelector);
  const router = useRouter();

  useEffect(() => {
    //normally here would be code looking up contract from db
    // if (currentContract.id !== id) {
    //   setIsFound(false);
    //   return;
    // }
    setContractText(currentContract.text);
    const isSigned = false; //isContractSigned(currentContract);
    setIsSigned(isSigned);
    setIsFound(true);
  }, [currentContract, /* currentContract.id, currentUser,*/ id]);

  const handleClick = () => {
    if (!isFound) {
      router.push('/qr/paste', { scroll: false });
      return;
    }
    router.push('/contract/share', { scroll: false });
    toastSuccess(isSigned ? 'Shared' : 'Signed');
  };

  const submitButton = <Button onClick={handleClick} title={getTitle(isFound, isSigned)} />;

  return (
    <MainWrapper title="Contract" submitButton={submitButton}>
      <div
        style={{ scrollbarWidth: 'none' }}
        className="resize-none h-full sm:h-64 sm:max-h-64 w-full p-2 border-0 outline-0 rounded border-none overflow-y-scroll text-black text-2xl"
      >
        {isFound ? contractText : <div className="w-full text-center">Contract not found</div>}
      </div>
      <Signees />
    </MainWrapper>
  );
};
