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

export const Login = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();

  const [value, setValue] = React.useState('value');
  const [isShowText, setIsShowText] = React.useState(false);
  const inputRef = React.useRef(null);

  const toggleTypeInput = () => {
    setIsShowText((v) => !v);
  };

  return (
    <div className={cn(styles.page_login, extraClass)}>
      <span className={cn(styles.title, 'text text_type_main-medium')}>
        {t('login.loginTitle')}
      </span>
      <form>
        <div className="input mb-6">
          <Input
            value={'value'}
            name={'email'}
            onChange={() => {}}
            placeholder={t('formField.email')}
          />
        </div>
        <div className="input mb-6">
          <Input
            type={isShowText ? 'text' : 'password'}
            onChange={(e) => setValue(e.target.value)}
            placeholder={t('formField.password')}
            onIconClick={toggleTypeInput}
            ref={inputRef}
            name={'name'}
            value={value}
            icon={isShowText ? 'ShowIcon' : 'HideIcon'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          />
        </div>
        <div className={cn(styles.button_submit, 'mb-20')}>
          <Button type="primary" size="medium">
            {t('login.login')}
          </Button>
        </div>
      </form>
      <div className="text text_type_main-default">
        <div>
          <span className="text_color_inactive">{t('login.newUser')}</span>{' '}
          <Link to="/register" extraClass={cn(styles.link_login)}>
            {t('login.goRegister')}
          </Link>
        </div>
        <div>
          <span className="text_color_inactive">
            {t('login.forgotPassword')}
          </span>{' '}
          <Link to="/forgot-password" extraClass={cn(styles.link_login)}>
            {t('login.restorePassword')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export const PageLogin = () => {
  return (
    <MainLayout>
      <Login></Login>
    </MainLayout>
  );
};
