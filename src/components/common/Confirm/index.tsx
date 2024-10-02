import { FaExclamationTriangle } from 'react-icons/fa';
import Modal from '@/components/layout/Modal';
import Button from '@/components/common/Button';
import useModal from '@/hooks/useModal.ts';
import type * as ModalType from '@/types/modal.ts';
import styles from './styles.module.css';

interface Props extends ModalType.Modal {
  message: string;
  // Confirm의 "네" 버튼 클릭 시 실행될 함수
  ok?: () => void;
}

const Confirm = ({ id, message, ok }: Props) => {
  const { close } = useModal();

  const handleClose = () => {
    close(id);
  };
  const handleOK = () => {
    ok && ok();
    close(id);
  };

  return (
    <Modal id={id} className={styles.confirm} onBgClick={handleClose}>
      <div className={styles.content}>
        <span className={styles.icon}>
          <FaExclamationTriangle />
        </span>
        <p>{message}</p>
      </div>
      <footer className={styles.footer}>
        <Button onClick={handleClose}>아니오</Button>
        <Button onClick={handleOK} active>
          네
        </Button>
      </footer>
    </Modal>
  );
};

export default Confirm;
