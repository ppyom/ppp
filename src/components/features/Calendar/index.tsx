import { createRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { EventChangeArg, EventClickArg } from '@fullcalendar/core';
import CalendarHeader from '@/components/features/CalendarHeader';
import ScheduleEditModal from 'components/features/ScheduleEditModal';
import ScheduleDetailModal from '@/components/features/ScheduleDetailModal';
import useSchedule from '@/hooks/useSchedule.ts';
import useModal from '@/hooks/useModal.ts';
import classNames from '@/utils/classNames.ts';
import { formatter, timeFormatter } from '@/utils/datetimeFormatter.ts';
import { eventToEventInput } from '@/utils/schedule.ts';
import styles from './styles.module.css';

const Calendar = () => {
  const calendarRef = createRef<FullCalendar>();
  const { open } = useModal();
  const { scheduleList, handleSaveSchedule } = useSchedule();

  const handleDateClick = ({ dateStr, view }: DateClickArg) => {
    view.type === 'dayGridMonth' && open(ScheduleEditModal, { date: dateStr });
  };
  const handleEventClick = ({ event }: EventClickArg) => {
    open(ScheduleDetailModal, { scheduleId: event.id });
  };
  const handleEventChange = ({ event }: EventChangeArg) => {
    handleSaveSchedule(event);
  };

  return (
    <div className={styles.container}>
      <CalendarHeader calendarRef={calendarRef} />
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[...Object.values(scheduleList).map(eventToEventInput)]}
        // Events
        editable={true}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        eventChange={handleEventChange}
        // Styles
        headerToolbar={false}
        eventDisplay="block"
        viewClassNames={(arg) =>
          classNames(styles.calendar, styles[arg.view.type])
        }
        dayHeaderClassNames={classNames(styles.week)}
        dayCellClassNames={(arg) =>
          classNames(styles.day, arg.isToday && styles.today)
        }
        eventClassNames={classNames(styles.event)}
        eventTimeFormat={(arg) =>
          arg.end
            ? `${timeFormatter(arg.start.array)}-${timeFormatter(arg.end.array)}`
            : timeFormatter(arg.date.array)
        }
        dayHeaderContent={(arg) =>
          arg.view.type === 'dayGridMonth'
            ? arg.text
            : formatter('ddd D', arg.date)
        }
        fixedWeekCount={false}
        dayMaxEvents={true}
      />
    </div>
  );
};

export default Calendar;
