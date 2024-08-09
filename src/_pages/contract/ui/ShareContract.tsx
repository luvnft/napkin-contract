import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button, MainWrapper } from '@/shared/components';
import { useAppSelector } from '@/shared/store/hook';
import { contractSelector } from '@/shared/store/selector/contract';
import { toastSuccess } from '@/shared/utils/toast';
import qrCode from '@public/qrcode.png';

export const ShareContract = () => {
  const router = useRouter();
  const currentContract = useAppSelector(contractSelector);

  const submitButton = (
    <Button
      onClick={() => {
        toastSuccess('Shared');
        router.push(`/contract/${currentContract.id}`, { scroll: false });
      }}
      title="Done"
    />
  );

  return (
    <MainWrapper title="Share the QR to request signing" submitButton={submitButton}>
      <div className="h-full sm:h-[459px] sm:max-h-[459px] w-full p-2 rounded text-black text-2xl flex items-center justify-center">
        <Image src={qrCode} alt="" className="size-[150px] md:size-[150px]" />
      </div>
    </MainWrapper>
  );
};
