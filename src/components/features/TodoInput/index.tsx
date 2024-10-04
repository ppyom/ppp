import { useState } from 'react';
import { FaClock, FaPlus } from 'react-icons/fa6';
import { v4 as uuid } from 'uuid';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Confirm from '@/components/common/Confirm';
import TodoDeadlineModal from '@/components/features/TodoDeadlineModal';
import useModal from '@/hooks/useModal.ts';
import useToast from '@/hooks/useToast.ts';
import useTodo from '@/hooks/useTodo.ts';
import { stringToRem } from '@/utils/string.ts';
import toast from '@/constants/toast.ts';
import confirm from '@/constants/confirm.ts';
import styles from './styles.module.css';

const TodoInput = () => {
  const { open } = useModal();
  const { setToast } = useToast();
  const { handleSaveTodo } = useTodo();
  const [value, setValue] = useState('');
  const [deadline, setDeadline] = useState('');
  const handleClockClick = () => {
    open(TodoDeadlineModal, {
      deadline,
      onSave: (date) => {
        setDeadline(date);
      },
    });
  };
  const handleDeadlineClick = () => {
    open(Confirm, {
      message: confirm.common.remove,
      ok: () => {
        setDeadline('');
      },
    });
  };
  const handleAddTodo = () => {
    if (!value.trim()) {
      setToast(toast.todo.inputContent);
      return;
    }
    handleSaveTodo({
      id: uuid(),
      title: value,
      deadline: deadline,
      isCompleted: false,
    });
    setToast(toast.todo.created);
    setValue('');
    setDeadline('');
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
