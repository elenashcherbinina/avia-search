export const hasTransfer = (route) => route.segments.length > 1;

export const parseDate = (date) => {
  const options = {
    month: 'short',
    day: '2-digit',
    weekday: 'short',
  };
  return new Date(date).toLocaleString('ru', options).split(',').reverse().join(' ');
};

export const parseTime = (date) => {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date(date).toLocaleString('ru', options);
};

export const formatDuration = (minutes) => {
  return `${Math.trunc(minutes / 60)} ч ${minutes % 60} мин`;
};
