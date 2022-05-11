import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'shared/hooks/use-redux';

import { getEntityUser } from 'entities/user/model/selectors';
import { fetchLogout } from 'entities/user/model/thunk';

import { NavButton } from 'shared/ui/nav-button';

import styles from './styles.module.css';

import type { Props } from './types';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

export const ProfileMenu = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();
  const location = useLocation();
  const dispatch = useDispatch();
  const { refreshToken } = useSelector(getEntityUser);

  const onLogout = () => {
    dispatch(fetchLogout({ token: refreshToken }));
  };

  return (
    <div className={cn(styles.profile_menu)}>
      <NavButton
        to="/profile"
        title={t('profile.profile')}
        extraClass="text_type_main-medium"
        active={location.pathname === '/profile'}
      />
      <NavButton
        to="/profile/orders"
        title={t('profile.history')}
        extraClass="text_type_main-medium"
        active={location.pathname === '/profile/orders'}
      />
      <NavButton
        to={location.pathname}
        title={t('profile.logout')}
        extraClass="text_type_main-medium"
        onClick={onLogout}
      />
      <span className="text text_type_main-default mt-8 pl-7 text_color_inactive">
        {t('profile.tolltipInfo')}
      </span>
    </div>
  );
};
