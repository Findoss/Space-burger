import React from 'react';
import { useTranslation } from 'react-i18next';

import { OrderDetails } from 'components/order-details';

import type { Props } from './types';
import { useSelector } from 'hooks/useRedux';
import { selectIdOrder } from 'store/Order/selectors';

export const ContainerOrderDetails = ({}: Props) => {
  const { t } = useTranslation();
  const id = useSelector(selectIdOrder);

  return (
    <OrderDetails
      id={String(id)}
      content={{
        id: t('orderDetails.id'),
        process: t('orderDetails.process'),
        pleaseWait: t('orderDetails.pleaseWait'),
      }}
    />
  );
};
