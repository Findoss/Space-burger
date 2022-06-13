import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Main as MainLayout } from 'widgets/layout-main';
import { WrapperCenterForm } from 'widgets/wrapper-center-form';

import { useGetIngredientQuery } from 'entities/ingredient/model/hooks';
import { ContainerIngredientDetails } from 'features/burger-ingredients/ui/container-ingredient-details';

export const Ingredient = () => {
  const { id } = useParams();
  useGetIngredientQuery();

  return (
    <span className="mb-10  mt-10 text text_type_main-medium">
      <ContainerIngredientDetails id={id || ''} />
    </span>
  );
};

export const PageIngredient = () => {
  return (
    <MainLayout>
      <WrapperCenterForm>
        <Ingredient />
      </WrapperCenterForm>
    </MainLayout>
  );
};
