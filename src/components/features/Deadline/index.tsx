import { FaClock } from 'react-icons/fa6';
import { formatter, timeFormatter } from '@/utils/datetimeFormatter.ts';
import styles from './styles.module.css';

interface Props {
  deadline: string;
  editMode: boolean;
  onDeadlineClick: () => void;
}

const Deadline = ({ editMode, deadline, onDeadlineClick }: Props) => {
  return (
    <p
      className={styles.deadline}
      onClick={editMode ? onDeadlineClick : () => {}}
    >
      <FaClock />
      {deadline && (
        <span className={styles.date}>{formatter('YY.MM.DD', deadline)}</span>
      )}
      {deadline.includes(' ') && (
        <span className={styles.time}>{timeFormatter(deadline)}</span>
      )}
    </p>
  );
};

export default Deadline;
