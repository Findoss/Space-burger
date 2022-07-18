import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { url, hasUrl } from 'shared/api/constants';
import { selectUserName } from 'entities/user/model/selectors';

import { NavButton } from 'shared/ui/nav-button';
import {
  Logo,
  ProfileIcon,
  BurgerIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app-header.module.css';

import type { Props } from './types';
import { useSelector } from 'shared/hooks/use-redux';

export const AppHeader = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();
  const userName = useSelector(selectUserName);
  const location = useLocation();

  return (
    <div className={cn(styles.header, 'p-4', extraClass)}>
      <div className={cn(styles.block, 'pr-5 pl-5')}>
        <div className={styles.menu}>
          <NavButton
            to={url('/')}
            icon={<BurgerIcon type="secondary" />}
            title={t('menu.constructorBurgers')}
            active={hasUrl(location.pathname, '/')}
          />
          <NavButton
            to={url('/feed')}
            icon={<ListIcon type="secondary" />}
            title={t('menu.listOrders')}
            active={hasUrl(location.pathname, '/feed')}
          />
        </div>
      </div>
      <div className={styles.block}>
        <Link to={url('/')}>
          <Logo />
        </Link>
      </div>
      <div className={styles.block}>
        <NavButton
          to={url('/profile')}
          icon={<ProfileIcon type="secondary" />}
          title={userName ? userName : t('menu.account')}
          active={hasUrl(location.pathname, '/profile')}
        />
      </div>
    </div>
  );
};
