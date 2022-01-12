import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { PureNavButton } from 'components/NavButton';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

import type { Props } from './types';

export const PureHeader = ({ className = undefined }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.header, 'p-4', className)}>
      <div className={cn(styles.block, 'pr-5 pl-5')}>
        <div className={styles.menu}>
          <PureNavButton
            to="qwer"
            icon={<BurgerIcon type="secondary" />}
            title={t('menu.constructorBurgers')}
          />
          <PureNavButton
            to="qwer2"
            icon={<ListIcon type="secondary" />}
            title={t('menu.listOrders')}
          />
        </div>
      </div>
      <div className={styles.block}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={styles.block}>
        <PureNavButton
          to="qwer3"
          icon={<ProfileIcon type="secondary" />}
          title={t('menu.account')}
        />
      </div>
    </div>
  );
};

export const Header = () => {
  return <PureHeader></PureHeader>;
};
