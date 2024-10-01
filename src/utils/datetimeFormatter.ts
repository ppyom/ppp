import moment, { MomentInput } from 'moment';

const formatter = (format: string, target?: MomentInput) => {
  return moment(target).format(format);
};

const dateFormatter = (target?: MomentInput) => {
  return formatter('YYYY-MM-DD', target);
};

const timeFormatter = (target?: MomentInput) => {
  return formatter('HH:mm', target);
};

const datetimeFormatter = (target?: MomentInput) => {
  return formatter('YYYY-MM-DD HH:mm', target);
};

const makeDatetime = (
  target: string = formatter('YY.MM.DD HH:mm'),
  format: string = 'YY.MM.DD HH:mm',
) => {
  return datetimeFormatter(moment(target, format));
};

export {
  formatter,
  dateFormatter,
  timeFormatter,
  datetimeFormatter,
  makeDatetime,
};
