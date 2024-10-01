import Input from '@/components/common/Input';
import { useState } from 'react';
import Button from '@/components/common/Button';
import styles from './styles.module.css';
import { FaClock, FaPlus } from 'react-icons/fa6';
import { stringToRem } from '@/utils/string.ts';
import useModal from '@/hooks/useModal.ts';
import Confirm from '@/components/common/Confirm';

const TodoInput = () => {
  const { open } = useModal();
  const [value, setValue] = useState('');
  const [deadline, setDeadline] = useState('24.10.02');
  const handleClockClick = () => {
    // TODO Deadline Setting 모달 오픈
  };
  const handleDeadlineClick = () => {
    open(Confirm, {
      message: '삭제하시겠습니까?',
      ok: () => {
        // TODO Deadline 삭제 구현 필요
        setDeadline('');
      },
    });
  };
  return (
    <div className={styles.container}>
      <Input
        value={value}
        setValue={setValue}
        placeholder="할 일을 입력하세요"
        icon={{
          Icon: FaClock,
          className: styles.icon,
          onClick: handleClockClick,
        }}
      />
      <Button className={styles.add} Icon={FaPlus} active />
      {deadline && (
        <div
          style={{
            translate: `${stringToRem(value)}rem`,
          }}
          className={styles.deadline}
          onClick={handleDeadlineClick}
        >
          {deadline}
        </div>
      )}
    </div>
  );
};

export default TodoInput;
