import React from 'react';
import cn from 'classnames';
// import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'shared/ui/link';
import { Main as MainLayout } from 'widgets/layout-main';

import styles from './styles.module.css';

import type { Props } from './types';

export const ForgotPassword = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.page_forgot_password, extraClass)}>
      <span className={cn(styles.title, 'text text_type_main-medium')}>
        {t('forgotPassword.title')}
      </span>
      <form>
        <div className="input mb-6">
          <Input
            value={''}
            name={'email'}
            onChange={() => {}}
            placeholder={t('formField.email')}
          />
        </div>
        <div className={cn(styles.button_submit, 'mb-20')}>
          <Button type="primary" size="medium">
            {t('forgotPassword.reset')}
          </Button>
        </div>
      </form>
      <div className="text text_type_main-default">
        <div>
          <span className="text_color_inactive">{t('forgotPassword.rememberPassword')}</span>{' '}
          <Link to="/register" extraClass={cn(styles.link_login)}>
            {t('forgotPassword.goLogin')}
          </Link>
        </div>
      </div>
    </div>
  );
};



export const PageForgotPassword = () => {
  return (
    <MainLayout>
      <ForgotPassword></ForgotPassword>
    </MainLayout>
  );
};
