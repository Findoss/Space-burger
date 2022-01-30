import type { ReactNode } from 'react';

export type TabProps = {
  key: string;
  title: ReactNode;
};

export type Props = {
  tabs: TabProps[];
  currentTab: string;
  onClick: (key: string) => void;
  extraClass?: string;
};
