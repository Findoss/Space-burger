import React from 'react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'shared/ui/link';
import { Main as MainLayout } from 'widgets/layout-main';

import styles from './styles.module.css';

import type { Props } from './types';
import type { SubmitHandler } from 'react-hook-form';

export const Register = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();

  const [value, setValue] = React.useState('value');
  const [isShowText, setIsShowText] = React.useState(false);
  const inputRef = React.useRef(null);

  const toggleTypeInput = () => {
    setIsShowText((v) => !v);
  };

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit: SubmitHandler = (data) => console.log(data);

  return (
    <div className={cn(styles.page_register, extraClass)}>
      <span className={cn(styles.title, 'text text_type_main-medium')}>
        {t('register.registerTitle')}
      </span>
      <form className={styles.register_form}>
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
        <div className="input mt-6 mb-6">
          <Input
            type={'text'}
            onChange={(e) => setValue(e.target.value)}
            placeholder={t('formField.userName')}
            value={'value'}
            ref={inputRef}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          />
        </div>
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
            {t('register.register')}
          </Button>
        </div>
      </form>
      <div className="text text_type_main-default">
        <span className="text_color_inactive">{t('register.readyLogin')}</span>{' '}
        <Link to="/login">{t('login.login')}</Link>
      </div>
    </div>
  );
};

export const PageRegister = () => {
  return (
    <MainLayout>
      <Register></Register>
    </MainLayout>
  );
};
