import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';

export const BurgerConstructorMainEmpty = ({ text = '' }: Props) => {
  return (
    <div
      className={cn(
        'text text_type_main-default text_color_inactive ml-10 mr-2',
        styles.constructor_main_empty,
      )}
    >
      {text}
    </div>
  );
};

export const BurgerConstructorTopEmpty = ({ text = '' }: Props) => {
  return (
    <div
      className={cn(
        'text text_type_main-default text_color_inactive ml-8',
        styles.constructor_top_empty,
      )}
    >
      {text}
    </div>
  );
};

export const BurgerConstructorBottomEmpty = ({ text = '' }: Props) => {
  return (
    <div
      className={cn(
        'text text_type_main-default text_color_inactive ml-8',
        styles.constructor_bottom_empty,
      )}
    >
      {text}
    </div>
  );
};
