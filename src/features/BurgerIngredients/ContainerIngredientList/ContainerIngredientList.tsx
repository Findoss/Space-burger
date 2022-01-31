import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import { useSelector } from 'hooks/useRedux';
import { useTranslation } from 'react-i18next';
import { useGetIngredientQuery } from 'store/Ingredients/hooks';

import { ContainerIngredient } from '../ContainerIngredient';
import { IngredientList } from 'components/IngredientList';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

import { selectIngredientsByType } from 'store/Ingredients/selectors';

import { selectActualType } from '../service/selectors';

import type { Props } from './types';

export const ContainerIngredientList = ({ type }: Props) => {
  const { t } = useTranslation();
  const $el = useRef<HTMLDivElement>(null);

  const { data, isError, isLoading } = useGetIngredientQuery();
  const dataIdIngredients = useSelector(selectIngredientsByType(type));
  const actualType = useSelector(selectActualType);

  useEffect(() => {
    if (actualType === type) {
      $el.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [actualType]);

  if (isError) {
    return <Error error={t('global.error')} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (data) {
    return (
      <IngredientList ref={$el} title={t(`constructor.${type}`)}>
        {dataIdIngredients.map((id) => (
          <ContainerIngredient key={id} id={id} />
        ))}
      </IngredientList>
    );
  }

  return null;
};
