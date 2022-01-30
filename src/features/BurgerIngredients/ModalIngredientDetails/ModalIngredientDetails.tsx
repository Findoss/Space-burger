import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'hooks/redux';

import { Modal } from 'components/Modal';
import { ContainerIngredientDetails } from '../ContainerIngredientDetails';

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
