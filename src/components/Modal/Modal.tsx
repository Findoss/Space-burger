import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

import type { Props } from './types';

export const Modal = ({
  open = false,
  children = '',
  onClose = () => {},
  onOpen = () => {},
  className = undefined,
}) => {
  const style = cn(styles.modal, 'p-30', className);

  return (
    open &&
    ReactDOM.createPortal(
      <div className={style}>
        <button
          className={cn(styles.close_button, 'mt-15 mr-10')}
          onClick={onClose}
        >
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>,
      document.body,
    )
  );
};
