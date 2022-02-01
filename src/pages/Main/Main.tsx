import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { resolveIngredients } from 'api/Ingredients';

import { Main as MainLayout } from 'layouts/Main';

import { Loader } from 'components/Loader';
import { IngredientList } from 'components/IngredientList';
// import { BurgerIngredients } from 'features/BurgerIngredients/TabsIngredients';
import { BurgerConstructor } from 'components/BurgerConstructor';
import { Modal } from 'components/Modal';
import { OrderDetails } from 'components/OrderDetails';
import { IngredientDetails } from 'components/IngredientDetails';

import { IngredientsType } from 'enums/Ingredients';

// import {
//   selectIngredientById,
//   selectIngredientsList,
//   selectIngredientsConstruct,
//   selectIngredientsConstructLocked,
// } from 'store/Ingredients/selectors';

import type { Props } from './types';
import type { IngredientsEntity } from 'api/Ingredients/types';
import type {
  IngredientLock,
  IngredientsMain,
} from 'components/BurgerConstructor/types';
// import type { Props as IngredientDetailsProps } from 'features/ContainerIngredientDetails/types';

import styles from './styles.module.css';

const baseLock = new Array(2).fill(null).map(() => ({
  price: 0,
  text: '',
  thumbnail: '',
}));

export const Main = ({ extraClass = undefined }: Props) => {
  const [ingredientListLoading, setIngredientListLoading] = useState(false);
  const [ingredientListError, setIngredientListError] = useState('');

  const [ingredientList, setIngredientList] = useState<IngredientsEntity>(
    undefined as any,
  );

  const [ingredientsConstructor, setIngredientsConstructor] = useState<
    IngredientsMain | undefined
  >([]);

  const [ingredientsConstructorLocked, setIngredientsConstructorLocked] =
    useState<IngredientLock[]>(baseLock);

  // const [modalIngredient, setModalIngredient] =
  //   useState<IngredientDetailsProps>({});

  const [modalOrderVisible, setModalOrderVisible] = useState(false);
  const [modalIngredientVisible, setModalIngredientVisible] = useState(false);

  const { t } = useTranslation();

  // useEffect(() => {
  //   setIngredientListLoading(true);

  //   resolveIngredients()
  //     .then((data) => {
  //       setIngredientList(data);
  //       setIngredientsConstructor(selectIngredientsConstruct(data));
  //       setIngredientsConstructorLocked(selectIngredientsConstructLocked(data));
  //     })
  //     .catch((error) => {
  //       setIngredientListError(error.messages);
  //     })
  //     .finally(() => {
  //       setIngredientListLoading(false);
  //     });
  // }, []);

  const handlerClickOrder = () => {
    setModalOrderVisible(true);
  };

  const handlerCloseModalOrder = () => {
    setModalOrderVisible(false);
  };

  const handlerCloseModalIngredient = () => {
    setModalIngredientVisible(false);
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

  return null;
  // return (
  //   <>
  //     <div className={cn(styles.main, 'pt-10', extraClass)}>
  //       {ingredientListError !== '' && <h1>{ingredientListError}</h1>}
  //       {!ingredientListLoading ? (
  //         <>
  //           <BurgerIngredients
  //             title={t('constructor.constructor')}
  //             tabs={lists}
  //             extraClass={styles.burger_ingredients}
  //           >
  //             {lists.map(({ key, title }) => (
  //               <IngredientList
  //                 key={key}
  //                 title={title}
  //                 ingredients={selectIngredientsList(ingredientList, key)}
  //               />
  //             ))}
  //           </BurgerIngredients>
  //           <BurgerConstructor
  //             clickOrder={handlerClickOrder}
  //             ingredientTop={{
  //               ...ingredientsConstructorLocked[0],
  //             }}
  //             ingredientBottom={{
  //               ...ingredientsConstructorLocked[0],
  //             }}
  //             ingredients={ingredientsConstructor ?? []}
  //           />
  //         </>
  //       ) : (
  //         <Loader />
  //       )}
  //     </div>
  //     {modalOrderVisible && (
  //       <Modal onClose={handlerCloseModalOrder}>
  //         <OrderDetails id="1234566" />
  //       </Modal>
  //     )}
  //     {modalIngredientVisible && (
  //       <Modal
  //         title={t('ingredientDetails.title')}
  //         onClose={handlerCloseModalIngredient}
  //       >
  //         <IngredientDetails {...modalIngredient} />
  //       </Modal>
  //     )}
  //   </>
  // );
};

export const PageMain = () => {
  return (
    <MainLayout>
      <Main />
    </MainLayout>
  );
};
