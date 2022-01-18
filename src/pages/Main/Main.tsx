import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { resolveIngredients } from 'api/Ingredients';

import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';
import { Order } from 'components/Order';
import { IngredientInfo } from 'components/IngredientInfo';
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

import styles from './styles.module.css';

const baseLock = new Array(2).fill(null).map(() => ({
  price: 0,
  text: '',
  thumbnail: '',
}));

export const Main = ({ className = undefined }: Props) => {
  const [ingredientList, setIngredientList] = useState(undefined);
  const [ingredientsConstructor, setIngredientsConstructor] = useState({});
  const [ingredientsConstructorLocked, setIngredientsConstructorLocked] =
    useState(baseLock);
  const [ingredientListLoading, setIngredientListLoading] = useState(false);
  const [ingredientListError, setIngredientListError] = useState('');

  // const [modalIngredient, setModalIngredient] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    setIngredientListLoading(true);

    resolveIngredients()
      .then((data) => {
        if (data !== undefined) {
          setIngredientList(data as any);
          setIngredientsConstructor(selectIngredientsConstruct(data) as any);
          setIngredientsConstructorLocked(
            selectIngredientsConstructLocked(data) as any,
          );
        }
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
    // setModalIngredient((old) => !old);
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
              ...ingredientsConstructorLocked[1],
            }}
            ingredients={ingredientsConstructor as any}
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
          <Order />
        </Modal>
      )}
      {modalIngredientVisible && (
        <Modal onClose={closeModalIngredient}>
          <IngredientInfo />
        </Modal>
      )}
    </MainLayout>
  );
};
