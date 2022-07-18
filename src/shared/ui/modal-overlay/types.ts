import type { SyntheticEvent } from 'react';

export type Props = {
  onClick: (e: SyntheticEvent<HTMLDivElement>) => void;
  extraClass?: string;
};
