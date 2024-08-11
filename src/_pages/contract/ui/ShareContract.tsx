import Image from 'next/image';

import { Button, MainWrapper } from '@/shared/components';
import { toastInfo, toastSuccess } from '@/shared/utils/toast';
import qrCode from '@public/qrcode.png';

export const ShareContract = () => {
  // const router = useRouter();
  // const currentContract = useAppSelector(contractSelector);

  const handleQRClick = /* async */ () => {
    // if (window.isSecureContext) {
    //   await navigator.clipboard.writeText(currentContract.id);
    // }
    toastInfo('contract link copied');
  };

  const submitButton = (
    <Button
      onClick={() => {
        toastSuccess('Shared');
        // router.push(`/contract/${currentContract.id}`, { scroll: false });
      }}
      title="Done"
    />
  );

  return (
    <MainWrapper title="Invite signees" submitButton={submitButton}>
      <div className="h-full sm:h-[459px] sm:max-h-[459px] w-full p-2 rounded text-black text-2xl flex flex-col items-center justify-center gap-3">
        <Image
          src={qrCode}
          alt=""
          className="size-[150px] md:size-[150px]"
          onClick={handleQRClick}
        />
        <span className="text-center text-gray-500">Click QR to copy</span>
      </div>
    </MainWrapper>
  );
};
