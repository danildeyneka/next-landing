import moment from "moment";

export const getDateNTime = (time: string): string => moment(time).format('d.mm.yyyy, HH:mm')
