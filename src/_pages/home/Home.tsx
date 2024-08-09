import { Button } from '@/shared/components';
import { Logo } from '@/shared/icon';

export const Home = () => (
  <main className="flex flex-col gap-7 items-center justify-center">
    <div className="h-[150px] flex items-center justify-center">
      <Logo />
    </div>

    <Button title="Create contract" href="/contract/new" />
    <Button title="Paste code" href="/qr/paste" />
    <Button title="Scan QR" href="/contract/new" />
  </main>
);
