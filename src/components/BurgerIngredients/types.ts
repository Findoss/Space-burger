import type { ReactNode } from 'react';
import type { TabProps } from 'components/Tabs/types';

export type Props = {
  title: string;
  tabs: TabProps[];
  children?: ReactNode;
  extraClass?: string;
};
