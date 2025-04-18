import dayjs from 'dayjs';

export const formattedDate = (date) =>
  dayjs(date).isValid()
    ? dayjs(date).format('DD.MM.YYYY HH:mm')
    : 'Date not available';
