import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';

export const OrderNumberList = ({
  extraClass = undefined,
  array = [],
  title = 'title',
  isDone = false,
}: Props) => {
  return (
    <div className={styles.statusSection}>
      <div className={styles.wrapper}>
        <p className={`text text_type_main-medium mb-6`}>{title}: </p>
        <div className={`custom-scroll ${styles.numbers}`}>
          {array.map((item) => {
            return (
              <p
                className={cn('text text_type_digits-default mb-6', {
                  [`${styles.order}`]: isDone,
                })}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
