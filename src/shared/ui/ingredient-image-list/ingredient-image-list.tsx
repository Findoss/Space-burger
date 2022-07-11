import React from 'react';
import cn from 'classnames';

import { Image } from 'shared/ui/image';

import styles from './ingredient-image-list.module.css';

import type { Props } from './types';

const LIMIT_ING = 5;

export const IngredientImageList = ({
  images = [],
  extraClass = undefined,
}: Props) => {
  let shiftValue = -40;
  let positionIndex = 6;

  return (
    <>
      {images.map((image, index) => {
        if (index <= LIMIT_ING) {
          shiftValue += 40;
          positionIndex += -1;

          if (index === LIMIT_ING) {
            return (
              <div
                key={index}
                className={`${styles.icon} ${styles.icon_last}`}
                style={{
                  backgroundImage: `url(${image})`,
                  position: 'absolute',
                  left: `${shiftValue}px`,
                  zIndex: `${positionIndex}`,
                }}
              >
                {images.length - LIMIT_ING + 1 !== 0 && (
                  <p
                    className={`text text_type_digits-default ${styles.number}`}
                  >
                    +{images.length - LIMIT_ING + 1}
                  </p>
                )}
              </div>
            );
          }

          return (
            <div
              key={index}
              className={styles.icon}
              style={{
                backgroundImage: `url(${image})`,
                position: 'absolute',
                left: `${shiftValue}px`,
                zIndex: `${positionIndex}`,
              }}
            ></div>
          );
        } else return null;
      })}
    </>
  );
};
