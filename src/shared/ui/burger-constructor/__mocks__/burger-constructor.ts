import { Props as BurgerConstructorItemProps } from 'shared/components/burger-constructor-item/types';

export const mockIngredients = [
  {
    id: '1',
    thumbnail: 'https://code.s3.yandex.net/react/code/sp_1-mobile.png',
    price: 300,
    text: 'Плоды Фалленианского дерева',
  },
  {
    id: '2',
    thumbnail: 'https://code.s3.yandex.net/react/code/mineral_rings-mobile.png',
    price: 800,
    text: 'Хрустящие минеральные кольца',
  },
  {
    id: '3',
    thumbnail: 'https://code.s3.yandex.net/react/code/sauce-01-mobile.png',
    price: 88,
    text: 'Соус с шипами Антарианского плоскоходца',
  },
  {
    id: '4',
    thumbnail: 'https://code.s3.yandex.net/react/code/core-mobile.png',
    price: 450,
    text: 'Кристаллы марсианских альфа-сахаридов',
  },
];

export const mockIngredientTop: BurgerConstructorItemProps = {
  thumbnail: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
  price: 20,
  text: 'Краторная булка N-200i',
  isLocked: true,
  type: 'top',
};

export const mockIngredientBottom: BurgerConstructorItemProps = {
  thumbnail: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  price: 20,
  text: 'Краторная булка N-200i',
  isLocked: true,
  type: 'bottom',
};
