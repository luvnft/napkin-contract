import Link from 'next/link';

type PropTypes = {
  title: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export const Button = ({
  href,
  title,
  onClick,
  className = 'bg-[#DC0203] text-white text-xl font-medium w-56 h-12 rounded-xl flex flex-row items-center justify-center cursor-pointer',
}: PropTypes) => {
  if (!href && !onClick) return null;

  if (href) {
    return (
      <Link href={href} className={className}>
        {title}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};
