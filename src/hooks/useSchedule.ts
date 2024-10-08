import { useDispatch, useSelector } from 'react-redux';
import { EventInput } from '@fullcalendar/core';
import { EventImpl } from '@fullcalendar/core/internal';
import { remove, save } from '@/store/reducer/scheduleReducer';
import { eventInputToEvent } from '@/utils/schedule.ts';
import type { Schedule } from '@/types/schedule.ts';
import type { RootState } from '@/store/reducer';

const useSchedule = (id?: string) => {
  const scheduleList = useSelector(
    (state: RootState) => state.schedule.scheduleList,
  );
  const dispatch = useDispatch();

  const getSchedule = (): Schedule | undefined => {
    return id ? scheduleList[id] : undefined;
  };
  const handleSaveSchedule = (
    event: Schedule | EventInput | EventImpl,
    isSchedule?: boolean,
  ) => {
    const ev: Schedule = isSchedule
      ? (event as Schedule)
      : eventInputToEvent(event);
    dispatch(save(ev));
  };
  const handleRemoveSchedule = () => {
    id && dispatch(remove(id));
  };

  return {
    scheduleList,
    getSchedule,
    handleSaveSchedule,
    handleRemoveSchedule,
  };
};

export default useSchedule;
