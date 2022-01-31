import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'hooks/useRedux';

import { TabsIngredients } from './TabsIngredients';
import { ContainerIngredientList } from './ContainerIngredientList';
import { ModalIngredientDetails } from './ModalIngredientDetails';

import { selectTypesIngredient } from './service/selectors';

import styles from './styles.module.css';

import type { Props } from './types';

export const BurgerIngredients = ({}: Props) => {
  const { t } = useTranslation();
  const $el = useRef<HTMLDivElement>(null);

  const typesIngredient = useSelector(selectTypesIngredient).map((v) => ({
    key: v,
    title: t(`constructor.${v}`),
  }));

  const handlerScroll = (e: any) => {
    console.log(e);
  };

  useEffect(() => {
    $el.current?.addEventListener('scroll', handlerScroll);
    return () => {
      $el.current?.removeEventListener('scroll', handlerScroll);
    };
  }, []);

  return (
    <>
      <TabsIngredients
        title={t('constructor.constructor')}
        tabs={typesIngredient}
      />
      <div ref={$el} className={cn(styles.wrapper_lists, 'custom-scroll')}>
        {typesIngredient.map((type) => (
          <ContainerIngredientList type={type.key} />
        ))}
      </div>
      <ModalIngredientDetails />
    </>
  );
};
