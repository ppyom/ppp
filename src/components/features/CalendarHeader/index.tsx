import { RefObject, useEffect, useState } from 'react';
import moment, { Moment } from 'moment/moment';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import FullCalendar from '@fullcalendar/react';
import Button from '@/components/common/Button';
import useCalendar from '@/hooks/useCalendar.ts';
import styles from './styles.module.css';

interface Props {
  calendarRef: RefObject<FullCalendar>;
}

const CalendarHeader = ({ calendarRef }: Props) => {
  const { handleNavClick } = useCalendar(calendarRef);
  const [date, setDate] = useState<Moment>(
    moment(calendarRef.current?.getApi().getDate()),
  );
  const [type, setType] = useState<string>(
    calendarRef.current?.getApi().view.type || 'dayGridMonth',
  );
  const handleDateChange = (type: 'prev' | 'today' | 'next') => {
    handleNavClick(type).then((api) => setDate(moment(api.getDate())));
  };
  const handleCalendarTypeChange = (type: string) => {
    const api = calendarRef.current?.getApi();
    if (api) {
      api.changeView(type);
      setType(type);
    }
  };

  useEffect(() => {
    const api = calendarRef.current?.getApi();
    if (api) {
      setDate(moment(api.getDate()));
      setType(api.view.type);
    }
  }, [calendarRef]);

  return (
    <header className={styles.header}>
      <Button
        onClick={() => handleDateChange('today')}
        disabled={moment().isSame(
          date,
          type === 'dayGridMonth' ? 'month' : 'week',
        )}
      >
        Today
      </Button>
      <div>
        <Button Icon={FiChevronLeft} onClick={() => handleDateChange('prev')} />
        <p className={styles.title}>
          {type === 'dayGridMonth' ? (
            <>
              <span>{date.format('MMMM')}</span>
              <span>{date.format('YYYY')}</span>
            </>
          ) : (
            <>
              <span>{`${date.clone().startOf('week').format('MMM D')} - ${date.clone().endOf('week').format('D')}`}</span>
              <span>{date.format('YYYY')}</span>
            </>
          )}
        </p>
        <Button
          Icon={FiChevronRight}
          onClick={() => handleDateChange('next')}
        />
      </div>
      <div>
        <Button
          onClick={() => handleCalendarTypeChange('dayGridMonth')}
          active={type === 'dayGridMonth'}
        >
          Month
        </Button>
        <Button
          onClick={() => handleCalendarTypeChange('timeGridWeek')}
          active={type === 'timeGridWeek'}
        >
          Week
        </Button>
      </div>
    </header>
  );
};

export default CalendarHeader;
