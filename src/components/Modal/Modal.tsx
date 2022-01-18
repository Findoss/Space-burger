import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { ModalOverlay } from 'components/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

import type { Props } from './types';

export const Modal = ({
  children = '',
  onClose = () => {},
  closeBackground = true,
  closeEscape = true,
  className = undefined,
}: Props) => {
  const handlerCloseBackground = () => {
    if (closeBackground) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handlerCloseBackground} closeEscape={closeEscape}>
      <div
        className={styles.modal_wrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cn(styles.modal, 'p-10', className)}>
          <button
            className={cn(styles.close_button, 'mt-15 mr-10')}
            onClick={onClose}
          >
            <CloseIcon type="primary" />
          </button>
          {children}
        </div>
      </div>
    </ModalOverlay>
  );
};
