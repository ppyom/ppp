import Select from '@/components/common/Select';
import useTimeSelect from '@/hooks/useTimeSelect.ts';
import { Hour, hours, Minute, minutes } from '@/types/time.ts';
import styles from './styles.module.css';

interface Props {
  label: string;
  // 시간 선택 시 외부 데이터(상위 컴포넌트 데이터) 수정 함수
  onTimeChange: (time: { hour: Hour; minute: Minute }) => void;
  defaultTime?: string;
}

const TimeSelect = ({ label, onTimeChange, defaultTime }: Props) => {
  const [hourText, minuteText] = defaultTime
    ? defaultTime.split(':')
    : ['00', '00'];
  const { hour, setHour, minute, setMinute, makeOption } = useTimeSelect(
    hours.includes(hourText) ? hourText : '00',
    minutes.includes(minuteText) ? minuteText : '00',
  );
  const handleTimeChange = <T extends Hour | Minute>(
    type: 'hour' | 'minute',
    option: T,
  ) => {
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
