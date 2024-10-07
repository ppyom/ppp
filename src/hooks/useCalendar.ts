import { RefObject, useEffect, useMemo, useState } from 'react';
import moment, { Moment } from 'moment';
import FullCalendar from '@fullcalendar/react';
import { useAppDispatch } from '@/store';
import { fetchHolidays } from '@/store/reducer/scheduleReducer.ts';
import useLoading from '@/hooks/useLoading.ts';

// Calendar/DatePicker에서 공통적으로 사용되는 네비게이션 버튼 클릭 이벤트를 사용하기 위한 훅
const useCalendar = (calendarRef: RefObject<FullCalendar>) => {
  const dispatch = useAppDispatch();
  const { setLoading } = useLoading();
  const [date, setDate] = useState<Moment>(
    moment(calendarRef.current?.getApi().getDate()),
  );
  const year = useMemo(() => date?.year().toString(), [date]);

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

  useEffect(() => {
    setLoading(true);
    dispatch(fetchHolidays({ year })).finally(() => {
      setLoading(false);
    });
  }, [year]);

  return {
    date,
    year,
    handleNavClick,
  };
};

export default useCalendar;
