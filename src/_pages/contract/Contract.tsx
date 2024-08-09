'use client';

import { NewContract, ReadyContract, ReviewContract, ShareContract } from './ui';

type PropTypes = {
  pageType: 'new' | 'review' | 'share' | 'ready';
};
export const Contract = ({ pageType }: PropTypes) => {
  if (pageType === 'new') {
    return <NewContract />;
  }

  if (pageType === 'review') {
    return <ReviewContract />;
  }

  if (pageType === 'share') {
    return <ShareContract />;
  }

  if (pageType === 'ready') {
    return <ReadyContract />;
  }

  return null;
};
