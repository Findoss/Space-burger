import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientImageList } from 'shared/ui/ingredient-image-list';

import { timeDistance } from 'shared/libs/date';
import { ModalOrderCard } from 'features/order-card/order-card-modal';
import { url } from 'shared/api/constants';

export const FeedCard = ({
  link = '',
  extraClass = undefined,
  images = [],
  _id = '',
  createdAt = '2022-07-07T20:21:15.442Z',
  status = '',
  isOrderPage = '',
  name = '',
  number = 0,
  sum = 0,
}: Props) => {
  const [isShowModal, setIsShowModal] = React.useState(false);
  const handlerClose = () => {
    history.replaceState({}, '', url(`${link}`));
    setIsShowModal((state) => !state);
  };

  const handlerClick = () => {
    history.pushState({}, '', url(`${link}/${_id}`));
    setIsShowModal((state) => !state);
  };

  return (
    <div onClick={handlerClick}>
      {isShowModal && <ModalOrderCard id={_id} handlerClose={handlerClose} />}
      <div className={cn(extraClass, styles.card)}>
        <div className={styles.header}>
          <p className="text text_type_digits-default">{`#${number}`}</p>
          <p className="text text_type_main-default text_color_inactive">
            {timeDistance(createdAt)}
          </p>
        </div>
        <div className={styles.nameContainer}>
          <p className={`${styles.description} text text_type_main-medium`}>
            {name}
          </p>
          {isOrderPage ? (
            <p
              className={cn(`text text_type_main-default mt-2`, {
                [styles.color]: status === 'done',
              })}
            >
              {(status && 'done') ?? 'Выполнено'}
              {status === 'created' ? 'Создан' : 'Готовится'}
            </p>
          ) : null}
        </div>
        <div className={styles.footer}>
          <div className={styles.imageContainer}>
            <IngredientImageList images={images} />
          </div>
          <div className={styles.price}>
            <p className="text text_type_digits-default mr-2">{sum}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};
