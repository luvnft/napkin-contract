import { ReactNode } from 'react';

type PropTypes = {
  title: string;
  children: ReactNode;
  submitButton?: ReactNode;
};
export const MainWrapper = ({ title, children, submitButton }: PropTypes) => (
  <div className="flex flex-col w-full h-full">
    <h3 className="h-16 flex items-center justify-center text-black text-2xl font-semibold">
      {title}
    </h3>
    <div className="flex-grow min-h-0 p-2">{children}</div>
    {submitButton ? (
      <div className="w-full h-[90px] flex items-center justify-center shrink-0">
        {submitButton}
      </div>
    ) : null}
  </div>
);
