import { formatDistance } from 'date-fns';
import { es, ru } from 'date-fns/locale';

export const timeDistance = (date: string) =>
  formatDistance(new Date(date), new Date(), { addSuffix: true, locale: ru });
