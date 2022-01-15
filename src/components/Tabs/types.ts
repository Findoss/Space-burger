import type { ReactNode } from 'react';

export type TabProps = {
  key: string;
  title: ReactNode;
};

export type Props = {
  tabs: TabProps[];
  className?: string;
};
