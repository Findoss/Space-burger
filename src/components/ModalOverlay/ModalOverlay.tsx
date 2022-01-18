import React from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';

const modalRoot = document.querySelector('#modals');

export const ModalOverlay = ({
  onClick,
  children,
  className = undefined,
}: Props) => {
  if (!modalRoot) return null;

  return createPortal(
    <div className={cn(styles.modal_overlay, className)} onClick={onClick}>
      {children}
    </div>,
    modalRoot,
  );
};
