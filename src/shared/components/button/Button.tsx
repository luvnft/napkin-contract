import Link from 'next/link';

type PropTypes = {
  title: string;
  href?: string;
  onClick?: () => void;
};

export const Button = ({ href, title, onClick }: PropTypes) => {
  if (!href && !onClick) return null;

  if (href) {
    return (
      <Link
        href={href}
        className="bg-[#DC0203] text-white text-xl font-medium w-56 h-12 rounded-xl flex flex-row items-center justify-center"
      >
        {title}
      </Link>
    );
  }

  return (
    <button className="text-white w-56 rounded-xl" onClick={onClick}>
      {title}
    </button>
  );
};
