import { useDispatch, useSelector } from 'react-redux';
import { EventInput } from '@fullcalendar/core';
import { EventImpl } from '@fullcalendar/core/internal';
import { save } from '@/store/reducer/scheduleReducer';
import { eventInputToEvent } from '@/utils/schedule.ts';
import type { Schedule } from '@/types/schedule.ts';

const useSchedule = () => {
  const schedule = useSelector((state) => state.schedule);
  const dispatch = useDispatch();

  const handleSaveEvent = (
    event: Schedule | EventInput | EventImpl,
    isSchedule?: boolean,
  ) => {
    const ev: Schedule = isSchedule
      ? (event as Schedule)
      : eventInputToEvent(event);
    dispatch(save(ev));
  };

  return {
    schedule,
    handleSaveEvent,
  };
};

export default useSchedule;
