import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'shared/hooks/use-redux';

import { Modal } from 'shared/ui/modal';
import { ContainerIngredientDetails } from '../container-ingredient-details';

import { selectActiveIngredient } from '../../model/selectors';
import { setActualIngredient } from '../../model/slice';
import { url } from 'shared/api/constants';

export const ModalIngredientDetails = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const id = useSelector(selectActiveIngredient);

  if (id === null) {
    return null;
  }

  const handlerClose = () => {
    history.replaceState({}, '', url(`/`));
    dispatch(setActualIngredient(null));
  };

  return (
    <Modal title={t('ingredientDetails.title')} onClose={handlerClose}>
      <ContainerIngredientDetails id={id} />
    </Modal>
  );
};
