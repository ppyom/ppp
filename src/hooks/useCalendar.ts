import { RefObject } from 'react';
import FullCalendar from '@fullcalendar/react';

// Calendar/DatePicker에서 공통적으로 사용되는 네비게이션 버튼 클릭 이벤트를 사용하기 위한 훅
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
