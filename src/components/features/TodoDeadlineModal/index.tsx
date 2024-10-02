import { useCallback } from 'react';
import moment, { MomentInput } from 'moment';
import { FiX } from 'react-icons/fi';
import Modal from '@/components/layout/Modal';
import Button from '@/components/common/Button';
import DatePicker from '@/components/common/DatePicker';
import Checkbox from '@/components/common/Checkbox';
import TimeSelect from '@/components/features/TimeSelect';
import useModal from '@/hooks/useModal.ts';
import useDatePicker from '@/hooks/useDatePicker.ts';
import useCheckbox from '@/hooks/useCheckbox.ts';
import {
  dateFormatter,
  datetimeFormatter,
  timeFormatter,
} from '@/utils/datetimeFormatter.ts';
import type * as ModalType from '@/types/modal.ts';
import type { Hour, Minute } from '@/types/time.ts';
import styles from './styles.module.css';

interface Props extends ModalType.Modal {
  onDateChange: (date: string) => void;
  deadline?: string;
}

const TodoDeadlineModal = ({ id, deadline, onDateChange }: Props) => {
  const { close } = useModal();
  const { checked, setChecked } = useCheckbox(deadline?.includes(' '));
  const { selected, updateDate } = useDatePicker(dateFormatter(deadline));
  const formatter = useCallback(
    (target: MomentInput) =>
      checked ? datetimeFormatter(target) : dateFormatter(target),
    [checked],
  );
  const handleClose = () => {
    close(id);
  };
  const handleSave = () => {
    // TODO 마감기한 등록
  };
  const handleDateSelect = (date: string) => {
    updateDate(date);
    onDateChange(
      formatter(deadline ? `${date} ${deadline.split(' ')[1]}` : date),
    );
  };
  const handleTimeSelect = (time: { hour: Hour; minute: Minute }) => {
    onDateChange(
      formatter(
        moment(deadline)
          .hour(parseInt(time.hour))
          .minute(parseInt(time.minute)),
      ),
    );
  };
  return (
    <Modal id={id} className={styles['todo--deadline']}>
      <header className={styles.header}>
        <p>마감 기한 지정</p>
        <Button Icon={FiX} onClick={handleClose} />
      </header>
      <div className={styles.datetime}>
        <DatePicker initialDate={selected} updateDate={handleDateSelect} />
        {checked && (
          <TimeSelect
            label="종료 시간"
            defaultTime={timeFormatter(deadline)}
            onTimeChange={handleTimeSelect}
          />
        )}
        <Checkbox label="시간 설정" checked={checked} setChecked={setChecked} />
      </div>
      <footer className={styles.footer}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave} active>
          Save
        </Button>
      </footer>
    </Modal>
  );
};

export default TodoDeadlineModal;
