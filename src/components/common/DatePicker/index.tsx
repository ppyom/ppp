import { createRef } from 'react';
import moment from 'moment';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import Button from '@/components/common/Button';
import useCalendar from '@/hooks/useCalendar.ts';
import classNames from '@/utils/classNames.ts';
import { formatter } from '@/utils/datetimeFormatter.ts';
import styles from './styles.module.css';

interface Props {
  initialDate: string;
  updateDate: (date: string) => void;
  start?: string;
  end?: string;
  className?: string;
  onDateClick?: () => void;
}

const DatePicker = ({
  initialDate,
  updateDate,
  start,
  end,
  className = '',
  onDateClick,
}: Props) => {
  const calendarRef = createRef<FullCalendar>();
  const { date, handleNavClick } = useCalendar(calendarRef);
  const handleDateClick = ({ dateStr }: DateClickArg) => {
    updateDate(dateStr);
    onDateClick && onDateClick();
  };
  return (
    <div className={classNames(styles.container, className)}>
      <header className={styles.header}>
        <p>{formatter('MMMM YYYY', date)}</p>
        <div>
          <Button Icon={FiChevronLeft} onClick={() => handleNavClick('prev')} />
          <Button
            Icon={FiChevronRight}
            onClick={() => handleNavClick('next')}
          />
        </div>
      </header>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        initialDate={initialDate}
        dateClick={handleDateClick}
        headerToolbar={false}
        height="auto"
        viewClassNames={classNames(styles.datepicker)}
        dayCellClassNames={(arg) =>
          classNames(
            styles.day,
            moment(arg.date).isSame(initialDate) && styles.selected,
          )
        }
        dayHeaderClassNames={classNames(styles.week)}
        dayHeaderContent={(arg) => arg.text.charAt(0)}
        fixedWeekCount={false}
        validRange={{
          start,
          end,
        }}
      />
    </div>
  );
};

export default DatePicker;
