import type { ReactNode } from 'react';
import type { TabProps } from 'components/Tabs/types';

export type Props = {
  tabs: TabProps[];
  children?: ReactNode;
  className?: string;
};
