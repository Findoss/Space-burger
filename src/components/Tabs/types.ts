import type { ReactNode } from 'react';
import type { IngredientsType } from 'enums/Ingredient';

export type TabProps = {
  key: string;
  title: ReactNode;
};

export type Props = {
  tabs?: TabProps[];
  currentTab: IngredientsType;
  onClick: (key: IngredientsType) => void;
  extraClass?: string;
};
