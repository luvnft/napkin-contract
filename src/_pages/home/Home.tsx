'use client';

import { useEffect } from 'react';

import { Button } from '@/shared/components';
import { Logo } from '@/shared/icon';
import { useAppDispatch } from '@/shared/store/hook';
import { resetUser } from '@/shared/store/slice/user';

export const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(resetUser());
  }, [dispatch]);

  return (
    <main className="flex flex-col gap-7 items-center justify-center">
      <div className="h-[150px] flex items-center justify-center">
        <Logo />
      </div>

      <Button title="Create contract" href="/contract/new" />
      <Button title="Paste code" href="/qr/paste" />
      <Button title="Scan QR" href="/scan-qr" />
    </main>
  );
};
