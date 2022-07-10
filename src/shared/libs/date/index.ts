import { formatDistance, subDays } from 'date-fns';

export const timeDistance = (date: string) =>
  formatDistance(new Date(date), new Date(), { addSuffix: true });
