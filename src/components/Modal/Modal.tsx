import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { ModalOverlay } from 'components/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

import type { SyntheticEvent } from 'react';
import type { Props } from './types';

export const Modal = ({
  children = '',
  onClick = () => {},
  closeBackground = true,
  className = undefined,
}: Props) => {
  // const handlerClose = (e: SyntheticEvent) => {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   onClose();
  // };

  // const handlerBackground = (e: SyntheticEvent) => {
  //   if (closeBackground) {
  //     handlerClose(e);
  //   }
  // };

  return (
    <ModalOverlay
      onClick={() => {
        if (closeBackground) {
          onClick();
        }
      }}
    >
      <div
        className={styles.modal_wrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cn(styles.modal, 'p-10', className)}>
          <button
            className={cn(styles.close_button, 'mt-15 mr-10')}
            onClick={onClick}
          >
            <CloseIcon type="primary" />
          </button>
          {children}
        </div>
      </div>
    </ModalOverlay>
  );
};
