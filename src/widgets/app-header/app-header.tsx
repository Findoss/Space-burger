import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PREFIX } from 'shared/api/constants';

import { NavButton } from 'shared/ui/nav-button';
import {
  Logo,
  ProfileIcon,
  BurgerIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app-header.module.css';

import type { Props } from './types';

export const AppHeader = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.header, 'p-4', extraClass)}>
      <div className={cn(styles.block, 'pr-5 pl-5')}>
        <div className={styles.menu}>
          <NavButton
            to="/"
            icon={<BurgerIcon type="secondary" />}
            title={t('menu.constructorBurgers')}
          />
          <NavButton
            to="/todo1"
            icon={<ListIcon type="secondary" />}
            title={t('menu.listOrders')}
          />
        </div>
      </div>
      <div className={styles.block}>
        <Link to={`${PREFIX}/`}>
          <Logo />
        </Link>
      </div>
      <div className={styles.block}>
        <NavButton
          to="/login"
          icon={<ProfileIcon type="secondary" />}
          title={t('menu.account')}
        />
      </div>
    </div>
  );
};
