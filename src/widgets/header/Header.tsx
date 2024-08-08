import { Logo } from '@/shared/icon';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="flex flex-col shrink-0 items-center justify-center border-y border-black w-full h-16">
      <Link href="/" className="cursor-pointer">
        <Logo height={30} />
      </Link>
    </header>
  );
};
