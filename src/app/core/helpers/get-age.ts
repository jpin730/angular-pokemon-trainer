import { DateTime } from 'luxon';

export const getAge = (date: DateTime | string): number => {
  if (typeof date === 'string') {
    date = DateTime.fromISO(date);
  }

  return Math.floor(Math.abs(date.diff(DateTime.now(), 'years').years));
};
