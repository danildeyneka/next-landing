import moment from 'moment';

export const getDateNTime = (time: string): string => moment(time).format('D.MM.yyyy, HH:mm');
