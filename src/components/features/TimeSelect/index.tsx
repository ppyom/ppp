import Select from '@/components/common/Select';
import { Hour, hours, Minute, minutes } from '@/types/time.ts';
import styles from './styles.module.css';
import useTimeSelect from '@/hooks/useTimeSelect.ts';

interface Props {
  label: string;
  defaultHour?: Hour;
  defaultMinute?: Minute;
}

const TimeSelect = ({ label, defaultHour, defaultMinute }: Props) => {
  const { hour, setHour, minute, setMinute, makeOption } = useTimeSelect(
    defaultHour || hours[0],
    defaultMinute || minutes[0],
  );
  return (
    <div>
      <p className={styles.label}>{label}</p>
      <div className={styles['select--box']}>
        <Select<Hour>
          options={hours}
          onChange={setHour}
          value={makeOption(hour)}
        />
        <Select<Minute>
          options={minutes}
          onChange={setMinute}
          value={makeOption(minute)}
        />
      </div>
    </div>
  );
};

export default TimeSelect;
