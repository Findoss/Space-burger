import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { resolveIngredients } from 'api/Ingredients';

import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';
import { OrderDetails } from 'components/OrderDetails';
import { IngredientDetails } from 'components/IngredientDetails';
import { BurgerIngredients } from 'components/BurgerIngredients';
import { BurgerConstructor } from 'components/BurgerConstructor';
import { IngredientList } from 'components/IngredientList';
import { Main as MainLayout } from 'layouts/Main';

import { IngredientsType } from 'enums/Ingredients';

import {
  selectIngredientsList,
  selectIngredientsConstruct,
  selectIngredientsConstructLocked,
} from 'store/Ingredients/selectors';

import type { Props } from './types';
import type {
  IngredientLock,
  IngredientsMain,
} from 'components/BurgerConstructor/types';
import type { IngredientsEntity } from 'api/Ingredients/types';

import styles from './styles.module.css';

const baseLock = new Array(2).fill(null).map(() => ({
  price: 0,
  text: '',
  thumbnail: '',
}));

export const Main = ({ className = undefined }: Props) => {
  const [ingredientListLoading, setIngredientListLoading] = useState(false);
  const [ingredientListError, setIngredientListError] = useState('');

  const [ingredientList, setIngredientList] =
    useState<IngredientsEntity>(undefined);

  const [ingredientsConstructor, setIngredientsConstructor] = useState<
    IngredientsMain | undefined
  >([]);

  const [ingredientsConstructorLocked, setIngredientsConstructorLocked] =
    useState<IngredientLock[]>(baseLock);

  // const [modalIngredient, setModalIngredient] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    setIngredientListLoading(true);

    resolveIngredients()
      .then((data) => {
        setIngredientList(data);
        setIngredientsConstructor(selectIngredientsConstruct(data));
        setIngredientsConstructorLocked(selectIngredientsConstructLocked(data));
      })
      .catch((error) => {
        setIngredientListError(error.messages);
      })
      .finally(() => {
        setIngredientListLoading(false);
      });
  }, []);

  const handlerIndigentClick = (id: string) => {
    console.log(id);
  };

  const lists = [
    {
      key: IngredientsType.bells,
      title: t(`constructor.${IngredientsType.bells}`),
    },
    {
      key: IngredientsType.filling,
      title: t(`constructor.${IngredientsType.filling}`),
    },
    {
      key: IngredientsType.sauces,
      title: t(`constructor.${IngredientsType.sauces}`),
    },
  ];

  return (
    <div className={cn(styles.main, 'pt-10', className)}>
      {ingredientListError !== '' && <h1>{ingredientListError}</h1>}
      {!ingredientListLoading ? (
        <>
          <BurgerIngredients className={styles.burger_ingredients} tabs={lists}>
            {lists.map(({ key, title }) => (
              <IngredientList
                key={key}
                title={title}
                ingredients={selectIngredientsList(ingredientList, key)}
                onClick={handlerIndigentClick}
              />
            ))}
          </BurgerIngredients>
          <BurgerConstructor
            className="class"
            ingredientTop={{
              ...ingredientsConstructorLocked[0],
            }}
            ingredientBottom={{
              ...ingredientsConstructorLocked[0],
            }}
            ingredients={ingredientsConstructor ?? []}
            // ingredients={[]}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export const PageMain = () => {
  const [modalOrderVisible, setModalOrderVisible] = useState(true);
  const closeModalOrder = () => {
    setModalOrderVisible(false);
  };

  const [modalIngredientVisible, setModalIngredientVisible] = useState(true);
  const closeModalIngredient = () => {
    setModalIngredientVisible(false);
  };

  return (
    <MainLayout>
      <Main />
      {modalOrderVisible && (
        <Modal onClose={closeModalOrder}>
          <OrderDetails id="1234566" />
        </Modal>
      )}
      {modalIngredientVisible && (
        <Modal onClose={closeModalIngredient}>
          <IngredientDetails />
        </Modal>
      )}
    </MainLayout>
  );
};
