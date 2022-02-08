import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'shared/hooks/use-redux';

import { Modal } from 'shared/ui/modal';
import { ContainerIngredientDetails } from '../container-ingredient-details';

import { selectActiveIngredient } from '../service/selectors';
import { setActualIngredient } from '../service/slice';

export const ModalIngredientDetails = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const id = useSelector(selectActiveIngredient);

  if (id === null) {
    return null;
  }

  return (
    <Modal
      title={t('ingredientDetails.title')}
      onClose={() => dispatch(setActualIngredient(null))}
    >
      <ContainerIngredientDetails id={id} />
    </Modal>
  );
};
