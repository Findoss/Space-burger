import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { ReactComponent as DoneIcon } from 'assets/images/icons/done.svg';
import styles from './styles.module.css';

import type { Props } from './types';

export const OrderDetails = ({ id, className = undefined }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.order, className)}>
      <div className={cn('text text_type_digits-large mb-8', styles.id)}>
        {id}
      </div>
      <div className={cn('text text_type_main-medium mb-15')}>
        {t('orderDetails.id')}
      </div>
      <div className={cn('mb-15')}>
        <DoneIcon />
      </div>
      <div className={cn('text text_type_main-small mb-2')}>
        {t('orderDetails.process')}
      </div>
      <div
        className={cn('text text_type_main-small text_color_inactive mb-20')}
      >
        {t('orderDetails.pleaseWait')}
      </div>
    </div>
  );
};
