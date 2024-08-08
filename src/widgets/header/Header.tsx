import { Logo } from '@/shared/icon';

export const Header = () => {
  return (
    <header className="flex flex-col shrink-0 items-center justify-center border-y border-black w-full h-16">
      <Logo height={30} />
    </header>
  );
};
