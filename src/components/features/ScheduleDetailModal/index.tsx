import { FiEdit2, FiTrash2, FiX } from 'react-icons/fi';
import Modal from '@/components/layout/Modal';
import Button from '@/components/common/Button';
import ScheduleEditModal from '@/components/features/ScheduleEditModal';
import Confirm from '@/components/common/Confirm';
import useModal from '@/hooks/useModal.ts';
import useToast from '@/hooks/useToast.ts';
import { dateFormatter, datetimeFormatter } from '@/utils/datetimeFormatter.ts';
import type * as ModalType from '@/types/modal.ts';
import type { Event } from '@/types/event.ts';
import styles from './styles.module.css';

interface Props extends ModalType.Modal {
  event: Event;
}

const ScheduleDetailModal = ({ id, event }: Props) => {
  const { setToast } = useToast();
  const { open, close } = useModal();
  const formatter = event.hasTime ? datetimeFormatter : dateFormatter;
  const handleClose = () => {
    close(id);
  };
  const handleEdit = () => {
    open(ScheduleEditModal, {
      date: event.start,
      event,
    });
  };
  const handleDelete = () => {
    open(Confirm, {
      message: '삭제하시겠습니까?',
      ok: () => {
        // TODO 삭제 처리
        setToast({ type: 'success', message: '삭제되었습니다.' });
        handleClose();
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
        <p>{event.title}</p>
        <div>
          <Button Icon={FiEdit2} onClick={handleEdit} />
          <Button Icon={FiTrash2} onClick={handleDelete} />
          <Button Icon={FiX} onClick={handleClose} />
        </div>
      </header>
      <div className={styles.contents}>
        <p>
          <span>{formatter(event.start)}</span>
          {event.end && (
            <>
              <span>-</span>
              <span>{formatter(event.end)}</span>
            </>
          )}
        </p>
      </div>
    </Modal>
  );
};

export default ScheduleDetailModal;
