import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

import type { ReactPortal } from 'react';
import type { Props } from './types';

export const Modal = ({
  selector = 'body',
  open = false,
  children = '',
  onClose = () => {},
  className = undefined,
}: Props) => {
  const style = cn(styles.modal, 'p-10', className);
  const $el = useRef(document.querySelector(selector));

  if ($el.current === null) return null;
  if (!open) return null;

  console.log($el.current);

  return createPortal(
    <div className={styles.modal_wrapper}>
      <div className={style}>
        <button
          className={cn(styles.close_button, 'mt-15 mr-10')}
          onClick={onClose}
        >
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </div>,
    $el.current,
  );
};
