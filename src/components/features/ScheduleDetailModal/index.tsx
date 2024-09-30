import { useDispatch, useSelector } from 'react-redux';
import { FiEdit2, FiTrash2, FiX } from 'react-icons/fi';
import { remove } from '@/store/reducer/scheduleReducer.ts';
import Modal from '@/components/layout/Modal';
import Button from '@/components/common/Button';
import ScheduleEditModal from '@/components/features/ScheduleEditModal';
import Confirm from '@/components/common/Confirm';
import useModal from '@/hooks/useModal.ts';
import useToast from '@/hooks/useToast.ts';
import { dateFormatter, datetimeFormatter } from '@/utils/datetimeFormatter.ts';
import type * as ModalType from '@/types/modal.ts';
import styles from './styles.module.css';

interface Props extends ModalType.Modal {
  scheduleId: string;
}

const ScheduleDetailModal = ({ id, scheduleId }: Props) => {
  const schedule = useSelector((state) => state.schedule[scheduleId]) || {};
  const dispatch = useDispatch();

  const { setToast } = useToast();
  const { open, close } = useModal();

  const formatter = schedule.hasTime ? datetimeFormatter : dateFormatter;

  const handleClose = () => {
    close(id);
  };
  const handleEdit = () => {
    open(ScheduleEditModal, {
      date: schedule.start,
      event: schedule,
    });
  };
  const handleDelete = () => {
    open(Confirm, {
      message: '삭제하시겠습니까?',
      ok: () => {
        setToast({ type: 'success', message: '삭제되었습니다.' });
        handleClose();
        dispatch(remove(schedule.id));
      },
    });
  };

  return (
    <Modal
      id={id}
      className={styles['schedule--detail']}
      onBgClick={handleClose}
    >
      <header className={styles.header}>
        <p>{schedule.title}</p>
        <div>
          <Button
            Icon={FiEdit2}
            onClick={handleEdit}
            disabled={schedule.isHoliday}
          />
          <Button
            Icon={FiTrash2}
            onClick={handleDelete}
            disabled={schedule.isHoliday}
          />
          <Button Icon={FiX} onClick={handleClose} />
        </div>
      </header>
      <div className={styles.contents}>
        <p>
          <span>{formatter(schedule.start)}</span>
          {schedule.end && (
            <>
              <span>-</span>
              <span>{formatter(schedule.end)}</span>
            </>
          )}
        </p>
      </div>
    </Modal>
  );
};

export default ScheduleDetailModal;
