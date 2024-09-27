import { RefObject } from 'react';
import FullCalendar from '@fullcalendar/react';

const useCalendar = (calendarRef: RefObject<FullCalendar>) => {
  const handleNavClick = async (type: 'prev' | 'today' | 'next') => {
    const api = calendarRef.current?.getApi();
    if (api) {
      if (type === 'prev') {
        api.prev();
      } else if (type === 'today') {
        api.today();
      } else {
        api.next();
      }
      return api;
    }
  };
  return {
    handleNavClick,
  };
};

export default useCalendar;
