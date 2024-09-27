import { createRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { EventChangeArg, EventClickArg, EventInput } from '@fullcalendar/core';
import classNames from '@/utils/classNames.ts';
import CalendarHeader from '@/components/features/CalendarHeader';
import ScheduleEditModal from 'components/features/ScheduleEditModal';
import useModal from '@/hooks/useModal.ts';
import {
  dateFormatter,
  datetimeFormatter,
  formatter,
  timeFormatter,
} from '@/utils/datetimeFormatter.ts';
import styles from './styles.module.css';

const Calendar = () => {
  const { open } = useModal();
  const calendarRef = createRef<FullCalendar>();
  const [calendarEvents] = useState<EventInput[]>([
    {
      id: '1',
      title: '프로젝트',
      start: dateFormatter(),
      classNames: [],
    },
    {
      id: '2',
      title: '점심시간',
      start: datetimeFormatter(),
      end: datetimeFormatter(),
    },
    {
      id: '3',
      title: '추석연휴',
      start: '2024-09-16',
      editable: false,
      classNames: [styles.dd, styles.holiday],
    },
    {
      id: '4',
      title: '추석',
      start: '2024-09-17',
      editable: false,
      classNames: [styles.dd, styles.holiday],
    },
    {
      id: '5',
      title: '추석연휴',
      start: '2024-09-18',
      editable: false,
      classNames: [styles.dd, styles.holiday],
    },
    {
      id: '6',
      title: '국군의날',
      start: '2024-10-01',
      editable: false,
      classNames: [styles.dd, styles.holiday],
    },
    {
      id: '7',
      title: '개천절',
      start: '2024-10-03',
      editable: false,
      classNames: [styles.dd, styles.holiday],
    },
  ]);

  const handleDateClick = ({ dateStr, view }: DateClickArg) => {
    view.type === 'dayGridMonth' && open(ScheduleEditModal, { date: dateStr });
  };
  const handleEventClick = ({ event }: EventClickArg) => {
    console.log('[event click]', event.title);
    // TODO 일정 상세 모달 오픈
  };
  const handleEventChange = (arg: EventChangeArg) => {
    console.log('[event change]', arg);
    // TODO 저장 로직 구현 후 작업
  };

  return (
    <div className={styles.container}>
      <CalendarHeader calendarRef={calendarRef} />
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents}
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
