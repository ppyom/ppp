import { useState } from 'react';
import { FaClock, FaPlus } from 'react-icons/fa6';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Confirm from '@/components/common/Confirm';
import TodoDeadlineModal from '@/components/features/TodoDeadlineModal';
import useModal from '@/hooks/useModal.ts';
import useToast from '@/hooks/useToast.ts';
import { stringToRem } from '@/utils/string.ts';
import styles from './styles.module.css';

const TodoInput = () => {
  const { open } = useModal();
  const { setToast } = useToast();
  const [value, setValue] = useState('');
  const [deadline, setDeadline] = useState('');
  const handleClockClick = () => {
    // TODO Deadline Setting 모달 오픈
    open(TodoDeadlineModal, {
      onDateChange: (date) => {
        console.log(date);
      },
    });
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
  const handleAddTodo = () => {
    if (!value.trim()) {
      setToast({ type: 'error', message: '내용을 입력해주세요.' });
      return;
    }
    // TODO 저장
    setToast({ type: 'success', message: '할 일이 등록되었어요.' });
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
      <Button
        className={styles.add}
        Icon={FaPlus}
        active
        onClick={handleAddTodo}
      />
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
