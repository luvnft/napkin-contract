import { Button, MainWrapper } from '@/shared/components';

type PropTypes = {
  title?: string;
  href?: string;
};

export const PageNotFound = ({ title = 'Page not found', href = '/qr/paste' }: PropTypes) => {
  const submitButton = <Button title="Back" href={href} />;

  return (
    <MainWrapper title="Contract" submitButton={submitButton}>
      <div
        style={{ scrollbarWidth: 'none' }}
        className="resize-none h-full sm:h-64 sm:max-h-64 w-full p-2 border-0 outline-0 rounded border-none overflow-y-scroll text-black text-2xl"
      >
        <div className="w-full text-center text-2xl">{title}</div>
      </div>
    </MainWrapper>
  );
};
