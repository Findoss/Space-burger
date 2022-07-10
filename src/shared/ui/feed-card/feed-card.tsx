import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';
import { Link } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientImageList } from 'shared/ui/ingredient-image-list';

import { timeDistance } from 'shared/libs/date';

export const FeedCard = ({
  extraClass = undefined,
  ingredients = [],
  _id = '',
  createdAt = '',
  status = '',
  isOrderPage = '',
  name = '',
  number = 0,
  sum = 0,
}: Props) => {
  return (
    <Link
      to={'/'}
      // to={{
      //   pathname: `${location.pathname}/${number}`,
      //   state: { background: location },
      // }}
      className={styles.link}
    >
      <div className={styles.card}>
        <div className={styles.header}>
          <p className="text text_type_digits-default">{`#${number}`}</p>
          <p className="text text_type_main-default text_color_inactive">
            {timeDistance(createdAt)}
          </p>
        </div>
        <div className={styles.nameContainer}>
          <p className={`${styles.description} text text_type_main-medium`}>
            {name}
          </p>
          {isOrderPage ? (
            <p
              className={cn(`text text_type_main-default mt-2`, {
                [styles.color]: status === 'done',
              })}
            >
              {(status && 'done') ?? 'Выполнено'}
              {status === 'created' ? 'Создан' : 'Готовится'}
            </p>
          ) : null}
        </div>
        <div className={styles.footer}>
          <div className={styles.imageContainer}>
            <IngredientImageList images={ingredients} />
          </div>
          <div className={styles.price}>
            <p className="text text_type_digits-default mr-2">{sum}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </Link>
  );
};

// import styles from './styles.module.css';
// import { useSelector } from 'react-redux';
// import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
// import { Link, useLocation, useRouteMatch } from 'react-router-dom';
// import { nanoid } from '@reduxjs/toolkit';

// export const FeedCard = ({
//   ingredients,
//   createdAt,
//   status,
//   isOrderPage,
//   name,
//   number,
// }: Props) => {
//   const data = useSelector((store) => store.ingredients);
//   const location = useLocation();
//   const { url } = useRouteMatch();

//   const ingredientsOrder = [];
//   for (let i = 0; i < ingredients.length; i++) {
//     const element = data.ingredients.find(
//       (item) => item._id === ingredients[i],
//     );
//     if (element) {
//       ingredientsOrder.push(element);
//     }
//   }

//   let shiftValue = -40;
//   let positionIndex = 6;

//   let price = 0;
//   ingredientsOrder.forEach((element) => {
//     price = price + element.price;
//   });

//   return (
//     <Link
//       to={{
//         pathname: `${location.pathname}/${number}`,
//         state: { background: location },
//       }}
//       className={styles.link}
//     >
//       <div className={styles.card}>
//         <div className={styles.header}>
//           <p className="text text_type_digits-default">{`#${number}`}</p>
//           <p className="text text_type_main-default text_color_inactive">
//             {createdAt}
//           </p>
//         </div>
//         <div className={styles.nameContainer}>
//           <p className={`${styles.description} text text_type_main-medium`}>
//             {name}
//           </p>
//           {isOrderPage ? (
//             <p
//               className={cn(`text text_type_main-default mt-2`, {
//                 [styles.color]: status === 'done',
//               })}
//             >
//               {status === 'done'
//                 ? 'Выполнено'
//                 : status === 'created'
//                 ? 'Создан'
//                 : 'Готовится'}
//             </p>
//           ) : null}
//         </div>
//         <div className={styles.footer}>
//           <div className={styles.imageContainer}>
//             {ingredientsOrder.map((element, index) => {
//               if (index < 6) {
//                 shiftValue = shiftValue + 40;
//                 positionIndex = positionIndex - 1;

//                 if (index === 5) {
//                   return (
//                     <div
//                       className={`${styles.icon} ${styles.icon_last}`}
//                       style={{
//                         backgroundImage: `url(${element.image})`,
//                         position: 'absolute',
//                         left: `${shiftValue}px`,
//                         zIndex: `${positionIndex}`,
//                       }}
//                       key={nanoid()}
//                     >
//                       {ingredientsOrder.length - 6 !== 0 && (
//                         <p
//                           className={`text text_type_digits-default ${styles.number}`}
//                         >
//                           +{ingredientsOrder.length - 6}
//                         </p>
//                       )}
//                     </div>
//                   );
//                 }

//                 return (
//                   <div
//                     className={styles.icon}
//                     style={{
//                       backgroundImage: `url(${element.image})`,
//                       position: 'absolute',
//                       left: `${shiftValue}px`,
//                       zIndex: `${positionIndex}`,
//                     }}
//                     key={nanoid()}
//                   ></div>
//                 );
//               } else return;
//             })}
//           </div>
//           <div className={styles.price}>
//             <p className="text text_type_digits-default mr-2">{price}</p>
//             <CurrencyIcon type="primary" />
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };
