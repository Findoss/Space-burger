import { RootState, WIDGETS } from 'store/store';
import { WIDGET_BURGER_CONSTRUCTOR } from './slice';

export const getBurgerConstructorWidget = (state: RootState) =>
  state[WIDGETS][WIDGET_BURGER_CONSTRUCTOR];

export const selectIsModalOpen = (state: RootState) =>
  getBurgerConstructorWidget(state).order.modalIsOpen;
