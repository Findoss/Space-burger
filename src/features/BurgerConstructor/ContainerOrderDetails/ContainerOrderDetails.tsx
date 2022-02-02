import React from 'react';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

import type { Props } from './types';
import { OrderDetails } from 'components/OrderDetails';

export const ContainerOrderDetails = ({}: Props) => {
  const { t } = useTranslation();
  return (
    <OrderDetails
      content={{
        id: t('orderDetails.id'),
        process: t('orderDetails.process'),
        pleaseWait: t('orderDetails.pleaseWait'),
      }}
    />
  );
};
