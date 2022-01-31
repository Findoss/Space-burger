import type { TabProps } from 'components/Tabs/types';

export type Props = {
  title: string;
  tabs: TabProps[];
  onClick: (key: string) => void;
  extraClass?: string;
};
