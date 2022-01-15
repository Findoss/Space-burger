import { Props as BurgerConstructorItemProps } from 'components/BurgerConstructorItem/types';

export const mockIngredients = [
  {
    thumbnail: 'https://code.s3.yandex.net/react/code/sp_1-mobile.png',
    price: 300,
    text: 'Плоды Фалленианского дерева',
  },
  {
    thumbnail: 'https://code.s3.yandex.net/react/code/mineral_rings-mobile.png',
    price: 800,
    text: 'Хрустящие минеральные кольца',
  },
  {
    thumbnail: 'https://code.s3.yandex.net/react/code/sauce-01-mobile.png',
    price: 88,
    text: 'Соус с шипами Антарианского плоскоходца',
  },
  {
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
