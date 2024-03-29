import React, { SyntheticEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { ModalOverlay } from 'shared/ui/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './modal.module.css';

import type { Props } from './types';

export const Modal = ({
  children = '',
  title = '',
  onClose = () => {},
  closeBackground = true,
  closeEscape = true,
  extraClass = undefined,
}: Props) => {
  const modalRoot = document.querySelector('#modals');

  const handlerCloseBackground = (e: SyntheticEvent<HTMLDivElement>) => {
    if (closeBackground) {
      e.stopPropagation();
      onClose();
    }
  };

  useEffect(() => {
    if (closeEscape) {
      const close = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', close);
      return () => window.removeEventListener('keydown', close);
    }
  }, [closeEscape, onClose]);

  if (!modalRoot) return null;

  return createPortal(
    <>
      <ModalOverlay onClick={handlerCloseBackground} />
      <div
        test-id="modal"
        className={styles.modal_wrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cn(styles.modal, 'p-10', extraClass)}>
          {title && (
            <div className={cn('text text_type_main-large', styles.title)}>
              {title}
            </div>
          )}
          <button
            className={cn(styles.close_button, 'mt-15 mr-10')}
            onClick={onClose}
          >
            <CloseIcon type="primary" />
          </button>
          {children}
        </div>
      </div>
    </>,
    modalRoot,
  );
};
