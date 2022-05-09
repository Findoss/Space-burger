import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'shared/hooks/use-redux';
import { getEntityUser } from 'entities/user/model/selectors';
import { fetchLogout } from 'entities/user/model/thunk';

import { Link } from 'shared/ui/link';
import { ProfileForm } from 'features/profile-form';
import { Main as MainLayout } from 'widgets/layout-main';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

import type { Props } from './types';

export const Profile = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { refreshToken } = useSelector(getEntityUser);

  const onLogout = () => {
    dispatch(fetchLogout({ token: refreshToken }));
  };

  return (
    <div className={cn(styles.page_profile, extraClass)}>
      <Link>{t('profile.profile')}</Link>
      <Button onClick={onLogout}>{t('profile.logout')}</Button>
      <ProfileForm />
    </div>
  );
};

export const PageProfile = () => {
  return (
    <MainLayout>
      <Profile></Profile>
    </MainLayout>
  );
};
