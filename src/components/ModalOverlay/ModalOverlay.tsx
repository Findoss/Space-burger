import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';

const modalRoot = document.querySelector('#modals');

export const ModalOverlay = ({
  onClick,
  children,
  closeEscape = true,
  className = undefined,
}: Props) => {
  if (!modalRoot) return null;

  useEffect(() => {
    if (closeEscape) {
      const close = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClick();
        }
      };
      window.addEventListener('keydown', close);
      return () => window.removeEventListener('keydown', close);
    }
  }, [closeEscape]);

  return createPortal(
    <div className={cn(styles.overlay, className)} onClick={onClick}>
      {children}
    </div>,
    modalRoot,
  );
};
