import { RefObject, useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import moment, { Moment } from 'moment';

// Calendar/DatePicker에서 공통적으로 사용되는 네비게이션 버튼 클릭 이벤트를 사용하기 위한 훅
const useCalendar = (calendarRef: RefObject<FullCalendar>) => {
  const [date, setDate] = useState<Moment>(
    moment(calendarRef.current?.getApi().getDate()),
  );
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
      setDate(moment(api.getDate()));
      return api;
    }
  };

  useEffect(() => {
    const api = calendarRef.current?.getApi();
    if (api) {
      setDate(moment(api.getDate()));
    }
  }, []);

  return {
    date,
    handleNavClick,
  };
};

export default useCalendar;
