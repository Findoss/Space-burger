import React from 'react';
import cn from 'classnames';

import { PureNavButton } from 'components/NavButton';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

import type { Props } from './types';

export const PureHeader = ({ className = undefined }: Props) => {
  return (
    <div className={cn(styles.header, 'p-4', className)}>
      <div className={cn(styles.block, 'pr-5 pl-5')}>
        <div className={styles.menu}>
          <PureNavButton
            icon={<BurgerIcon type="secondary" />}
            title={'Конструктор'}
          />
          <PureNavButton
            icon={<ListIcon type="secondary" />}
            title={'Лента заказов'}
          />
        </div>
      </div>
      <div className={styles.block}>
        <Logo />
      </div>
      <div className={styles.block}>
        <PureNavButton
          icon={<ProfileIcon type="secondary" />}
          title={'Личный кабинет'}
        />
      </div>
    </div>
  );
};

export const Header = () => {
  return <PureHeader></PureHeader>;
};
