import { useState } from 'react';
import { FiCalendar } from 'react-icons/fi';
import DatePicker from '@/components/common/DatePicker';
import useDatePicker from '@/hooks/useDatePicker.ts';
import classNames from '@/utils/classNames.ts';
import styles from './styles.module.css';

interface Props {
  label: string;
  date: string;
  // 날짜 선택 시 외부 데이터(상위 컴포넌트 데이터) 수정 함수
  onDateChange: (date: string) => void;
}

const DateInput = ({ label, date, onDateChange }: Props) => {
  const { selected, updateDate } = useDatePicker(date);
  const [open, setOpen] = useState(false);
  const handleDatePickerClose = () => {
    setOpen(false);
  };
  const handleDateSelect = (date: string) => {
    updateDate(date);
    onDateChange(date);
  };
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <div
        className={classNames(styles.date, open && styles.active)}
        onClick={() => setOpen(!open)}
      >
        <p>{selected}</p>
        <FiCalendar />
      </div>
      {open && (
        <DatePicker
          className={styles.datepicker}
          initialDate={selected}
          updateDate={handleDateSelect}
          onDateClick={handleDatePickerClose}
        />
      )}
    </div>
  );
};

export default DateInput;
