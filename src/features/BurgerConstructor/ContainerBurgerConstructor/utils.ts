import type { ConnectDropTarget } from 'react-dnd';

type rawData = [
  {
    canDrop: boolean;
    isOver: boolean;
  },
  ConnectDropTarget,
];

export const mapParamDrop = (data: rawData) => {
  return {
    $el: data[1],
    canDrop: data[0].canDrop,
    isOver: data[0].isOver,
    isActive: data[0].canDrop && data[0].isOver,
  };
};
