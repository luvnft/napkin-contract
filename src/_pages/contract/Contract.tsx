'use client';

import { NewContract, ReadyContract, ReviewContract, ShareContract } from './ui';

type PropTypes = {
  pageType: 'new' | 'review' | 'ready' | 'share';
  id?: string;
};
export const Contract = ({ pageType, id }: PropTypes) => {
  if (pageType === 'new') {
    return <NewContract />;
  }

  if (pageType === 'review') {
    return <ReviewContract />;
  }

  if (pageType === 'ready') {
    return <ReadyContract id={id} />;
  }

  if (pageType === 'share') {
    return <ShareContract />;
  }

  return null;
};
