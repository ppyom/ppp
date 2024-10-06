import { FiEdit2, FiTrash2, FiX } from 'react-icons/fi';
import Modal from '@/components/layout/Modal';
import Button from '@/components/common/Button';
import Confirm from '@/components/common/Confirm';
import ScheduleEditModal from '@/components/features/ScheduleEditModal';
import useModal from '@/hooks/useModal.ts';
import useToast from '@/hooks/useToast.ts';
import useSchedule from '@/hooks/useSchedule.ts';
import { dateFormatter, datetimeFormatter } from '@/utils/datetimeFormatter.ts';
import type * as ModalType from '@/types/modal.ts';
import toast from '@/constants/toast.ts';
import confirm from '@/constants/confirm.ts';
import styles from './styles.module.css';
import { Schedule } from '@/types/schedule.ts';

interface Props extends ModalType.Modal {
  scheduleId: string;
}

const ScheduleDetailModal = ({ id, scheduleId }: Props) => {
  const { getSchedule, handleRemoveSchedule } = useSchedule(scheduleId);
  const schedule: Schedule | undefined = getSchedule();

  if (!schedule) {
    return <></>;
  }

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
      message: confirm.common.remove,
      ok: () => {
        setToast(toast.common.remove);
        handleClose();
        handleRemoveSchedule();
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
