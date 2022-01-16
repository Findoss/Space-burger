import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { resolveIngredients } from 'api/Ingredients';

import { Loader } from 'components/Loader';
import { BurgerIngredients } from 'components/BurgerIngredients';
import { BurgerConstructor } from 'components/BurgerConstructor';
import { IngredientList } from 'components/IngredientList';
import { Main as MainLayout } from 'layouts/Main';

import styles from './styles.module.css';

import type { Props } from './types';
import type { IngredientsEntity } from 'api/Ingredients/types';

const selectIngredientsList = (
  entities: IngredientsEntity,
  typeIngredient = 'main',
) => {
  const ingredients = entities?.entities.ingredients;
  if (ingredients) {
    return Object.values(ingredients)
      .filter(({ type }) => type === typeIngredient)
      .map(({ id, image, name, price }) => {
        return {
          id,
          image,
          name,
          price,
        };
      });
  }
};

const selectIngredientsConstruct = (entities: IngredientsEntity) => {
  const ingredients = entities?.entities.ingredients;
  if (ingredients) {
    return Object.values(ingredients).map(
      ({ id, imageMobile, name, price }) => {
        return {
          id,
          price,
          text: name,
          thumbnail: imageMobile,
        };
      },
    );
  }
};

export const Main = ({ className = undefined }: Props) => {
  const style = cn(styles.main, 'pt-10', className);
  const [ingredientList, setIngredientList] = useState(undefined);
  const [ingredientsConstructor, setIngredientsConstructor] =
    useState(undefined);
  const [ingredientListLoading, setIngredientListLoading] = useState(false);
  const [ingredientListError, setIngredientListError] = useState('');

  const { t } = useTranslation();

  useEffect(() => {
    setIngredientListLoading(true);

    resolveIngredients()
      .then((data) => {
        if (data !== undefined) {
          setIngredientList(data as any);
          setIngredientsConstructor(selectIngredientsConstruct(data) as any);
        }
      })
      .catch((error) => {
        setIngredientListError(error.messages);
      })
      .finally(() => {
        setIngredientListLoading(false);
      });
  }, []);

  const tabs = [
    { key: '1', title: t('constructor.bells') },
    { key: '3', title: t('constructor.filling') },
    { key: '2', title: t('constructor.sauces') },
  ];

  const lists = [
    { type: 'bun', title: t('constructor.bells') },
    { type: 'main', title: t('constructor.filling') },
    { type: 'sauce', title: t('constructor.sauces') },
  ];

  return (
    <div className={style}>
      {ingredientListError !== '' && <h1>{ingredientListError}</h1>}
      {!ingredientListLoading ? (
        <>
          <BurgerIngredients className={styles.burger_ingredients} tabs={tabs}>
            {lists.map(({ type, title }) => {
              return (
                <IngredientList
                  title={title}
                  ingredients={selectIngredientsList(ingredientList, type)}
                />
              );
            })}
          </BurgerIngredients>
          <BurgerConstructor
            className="class"
            ingredientBottom={{
              isLocked: true,
              type: 'bottom',
              price: 20,
              text: 'Краторная булка N-200i',
              thumbnail:
                'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
            }}
            ingredientTop={{
              isLocked: true,
              type: 'top',
              price: 20,
              text: 'Краторная булка N-200i',
              thumbnail:
                'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
            }}
            ingredients={ingredientsConstructor}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export const PageMain = () => {
  return (
    <MainLayout>
      <Main />
    </MainLayout>
  );
};
