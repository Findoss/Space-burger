import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { ProfileForm } from 'features/profile-form';
import { ProfileMenu } from 'features/profile-menu';

import { Main as MainLayout } from 'widgets/layout-main';
import { WrapperCenterForm } from 'widgets/wrapper-center-form';

import styles from './styles.module.css';

import type { Props } from './types';

export const Profile = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.page, extraClass)}>
      <ProfileMenu tooltip={t('profile.tolltipInfo')} />
      <ProfileForm />
    </div>
  );
};

export const PageProfile = () => {
  return (
    <MainLayout>
      <WrapperCenterForm>
        <Profile />
      </WrapperCenterForm>
    </MainLayout>
  );
};
