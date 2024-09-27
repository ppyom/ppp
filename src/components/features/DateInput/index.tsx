import { useState } from 'react';
import { FiCalendar } from 'react-icons/fi';
import useDatePicker from '@/hooks/useDatePicker.ts';
import DatePicker from '@/components/common/DatePicker';
import classNames from '@/utils/classNames.ts';
import styles from './styles.module.css';

interface Props {
  label: string;
  date: string;
}

const DateInput = ({ label, date }: Props) => {
  const { selected, updateDate } = useDatePicker(date);
  const [open, setOpen] = useState(false);
  const handleDatePickerClose = () => {
    setOpen(false);
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
          updateDate={updateDate}
          onDateClick={handleDatePickerClose}
        />
      )}
    </div>
  );
};

export default DateInput;
