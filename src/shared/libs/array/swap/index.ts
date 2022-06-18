/**
 * функция перестановки элементов между собой в массиве
 * @param arr исходный массив
 * @param index1 индекс первого элемента
 * @param index2 индекс второго элемента
 * @returns новый массив
 */
export const swap = <T>(arr: T[], index1: number, index2: number) =>
  arr.map((val, idx) => {
    if (idx === index1) return arr[index2];
    if (idx === index2) return arr[index1];
    return val;
  });
