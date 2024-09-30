import moment from 'moment/moment';
import { EventInput } from '@fullcalendar/core';
import { Schedule } from '@/types/schedule.ts';
import { Holiday } from '@/types/holiday.ts';
import { EventImpl } from '@fullcalendar/core/internal';
import styles from '@/components/features/Calendar/styles.module.css';

const eventToEventInput = (event: Schedule): EventInput => {
  return {
    id: event.id,
    title: event.title,
    start: event.start,
    end: event.end,
    editable: !event.isHoliday,
  };
};
const eventInputToEvent = <T extends EventInput | EventImpl>(
  event: T,
): Schedule => {
  return {
    id: event.id,
    title: event.title,
    start: event.startStr,
    end: event.endStr,
    hasTime: event.startStr.includes('T'),
    isHoliday: event.classNames
      ? event.classNames.includes(styles.holiday)
      : false,
  };
};

const holidayToEventInput = (holiday: Holiday) => {
  const { locdate, isHoliday, dateName, dateKind } = holiday;
  return {
    id: `${locdate}_${dateKind}`,
    title: dateName,
    start: moment(locdate.toString(), 'YYYYMMDD').format('YYYY-MM-DD'),
    editable: false,
    classNames: [isHoliday === 'Y' && styles.holiday],
  };
};

export { eventToEventInput, eventInputToEvent, holidayToEventInput };
