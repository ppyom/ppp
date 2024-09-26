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

export { formatter, dateFormatter, timeFormatter, datetimeFormatter };
