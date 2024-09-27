import Select from '@/components/common/Select';
import { Hour, hours, Minute, minutes } from '@/types/time.ts';
import styles from './styles.module.css';
import useTimeSelect from '@/hooks/useTimeSelect.ts';

interface Props {
  label: string;
  onTimeChange: (time: { hour: Hour; minute: Minute }) => void;
  defaultHour?: Hour;
  defaultMinute?: Minute;
}

const TimeSelect = ({
  label,
  onTimeChange,
  defaultHour,
  defaultMinute,
}: Props) => {
  const { hour, setHour, minute, setMinute, makeOption } = useTimeSelect(
    defaultHour || hours[0],
    defaultMinute || minutes[0],
  );
  const handleTimeChange = <T,>(type: 'hour' | 'minute', option: T) => {
    type === 'hour' ? setHour(option) : setMinute(option);
    onTimeChange({
      hour,
      minute,
      [type]: option,
    });
  };
  return (
    <div>
      <p className={styles.label}>{label}</p>
      <div className={styles['select--box']}>
        <Select<Hour>
          options={hours}
          onChange={(option) => handleTimeChange('hour', option)}
          value={makeOption(hour)}
        />
        <Select<Minute>
          options={minutes}
          onChange={(option) => handleTimeChange('minute', option)}
          value={makeOption(minute)}
        />
      </div>
    </div>
  );
};

export default TimeSelect;
