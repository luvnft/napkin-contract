// @ts-nocheck_
import { fetchAttestation, fetchSignatureAttestations } from '@/api/eas-thirdweb';
import { Button, MainWrapper, Signees, Spinner } from '@/shared/components';
import { useAppDispatch, useAppSelector } from '@/shared/store/hook';
import { contractSelector } from '@/shared/store/selector/contract';
import { updateContract } from '@/shared/store/slice/contract';
import { toastError, toastInfo } from '@/shared/utils/toast';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useActiveAccount } from 'thirdweb/react';

type PropTypes = {
  id: string | undefined;
};

const getTitle = (isFound: boolean, isSigned: boolean) => {
  if (!isFound) return 'Back';
  return isSigned ? 'Share' : 'Sign';
};

export const ReadyContract = ({ id }: PropTypes) => {
  const [signees, setSignees] = useState([]);
  const [isFound, setIsFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSigned, setIsSigned] = useState(false);
  const account = useActiveAccount();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const contract = useAppSelector(contractSelector);

  useEffect(() => {
    fetchAttestation(id).then(async (contract) => {
      dispatch(
        updateContract({
          data: {
            uid: id as string,
            name: contract.name,
            text: contract.contract,
          },
        }),
      );
      const signees = await fetchSignatureAttestations(id);
      setSignees(
        [contract, ...signees].map(({ uid, name, createdAt }) => ({
          id: uid,
          fullname: name,
          dateSigned: createdAt,
        })),
      );
      setIsLoading(false);
      setIsFound(true);
    }, console.error);
  }, [id, dispatch]);

  useEffect(() => {
    const signed = signees.some(({ id }) => account?.address === id);
    setIsSigned(signed);
  }, [signees, account]);

  const handleClick = async () => {
    // Redirect to home page
    if (!isFound) {
      router.push('/', { scroll: false });
    } else if (signees[0].id === account?.address) {
      // Render QR
      router.push('/contract/share', { scroll: false });
    } else if (signees.length >= 2) {
      // Share link
      if (window.isSecureContext) {
        await navigator.clipboard.writeText(currentContract.id);
        toastInfo('Link has been copied');
      } else {
        toastError('Can not access clipboard');
      }
    } else {
      // Request signing
      router.push('/auth', { scroll: false });
    }
  };

  const submitButton = <Button onClick={handleClick} title={getTitle(isFound, isSigned)} />;

  return (
    <MainWrapper title="Contract" submitButton={submitButton}>
      <div
        style={{ scrollbarWidth: 'none' }}
        className="resize-none h-full sm:h-64 sm:max-h-64 w-full p-2 border-0 outline-0 rounded border-none overflow-y-scroll text-black text-2xl"
      >
        {isLoading && (
          <div className="flex flex-col gap-3 text-black">
            <span className="text-center">Loading attestation...</span>
            <Spinner />
          </div>
        )}
        {isFound && <div>{contract.text}</div>}
        {!isFound && !isLoading && <div className="w-full text-center">Contract not found</div>}
      </div>
      <Signees signees={signees} />
    </MainWrapper>
  );
};
