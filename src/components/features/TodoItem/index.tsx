import { useState } from 'react';
import { FaClock } from 'react-icons/fa6';
import { FiCheck, FiMoreVertical } from 'react-icons/fi';
import Button from '@/components/common/Button';
import Confirm from '@/components/common/Confirm';
import TodoDeadlineModal from '@/components/features/TodoDeadlineModal';
import useModal from '@/hooks/useModal.ts';
import useToast from '@/hooks/useToast.ts';
import useTodo from '@/hooks/useTodo.ts';
import classNames from '@/utils/classNames.ts';
import { makeDatetime } from '@/utils/datetimeFormatter.ts';
import type { Todo } from '@/types/todo.ts';
import toast from '@/constants/toast.ts';
import confirm from '@/constants/confirm.ts';
import styles from './styles.module.css';

interface Props extends Todo {}

const TodoItem = ({ id, title, deadline, isCompleted }: Props) => {
  const { open } = useModal();
  const { setToast } = useToast();
  const { handleSaveTodo, handleRemoveTodo } = useTodo(id);
  const [kebabOpen, setKebabOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const closeKebabMenu = () => {
    setKebabOpen(false);
    document.removeEventListener('click', handleKebabClose);
  };
  const handleMenuOpen = () => {
    setKebabOpen(true);
    document.addEventListener('click', handleKebabClose);
  };
  const handleKebabClose = ({ target }) => {
    if (target instanceof HTMLElement && !target.closest(`.${styles.kebab}`)) {
      closeKebabMenu();
    }
  };
  const handleComplete = ({ target }) => {
    if (!editMode && !target.closest('button')) {
      const completed = !isCompleted;
      handleSaveTodo({ id, title, deadline, isCompleted: completed });
      setToast(toast.todo.complete(completed));
    }
  };
  const handleKebabMenuClick = (type: 'edit' | 'delete') => {
    if (type === 'edit') {
      setEditMode(true);
    } else {
      open(Confirm, {
        message: confirm.common.remove,
        ok: () => {
          handleRemoveTodo();
          setToast(toast.common.remove);
        },
      });
    }
    closeKebabMenu();
  };
  const handleDeadlineChange = () => {
    open(TodoDeadlineModal, {
      deadline: makeDatetime(deadline || ''),
      onDateChange: (date) => {
        // TODO Deadline 설정
        console.log(date);
      },
    });
  };
  const handleEdit = () => {
    // TODO 저장 => 마감기한 설정 이후 작성
    setEditMode(false);
  };
  return (
    <div
      id={`todo_${id}`}
      className={classNames(styles.todo, isCompleted && styles.complete)}
      onClick={handleComplete}
    >
      <div className={styles.title}>
        {editMode ? (
          <input value={title} onChange={() => {}} />
        ) : (
          <p>{title}</p>
        )}
      </div>
      {deadline && (
        <p
          className={styles.deadline}
          onClick={editMode ? handleDeadlineChange : () => {}}
        >
          <FaClock />
          <span>{deadline}</span>
        </p>
      )}
      <div className={styles.buttons}>
        {editMode ? (
          <Button
            className={styles.ok}
            Icon={FiCheck}
            active
            onClick={handleEdit}
          />
        ) : (
          <Button
            className={styles.menu}
            Icon={FiMoreVertical}
            onClick={handleMenuOpen}
          />
        )}
      </div>
      {kebabOpen && (
        <div className={styles.kebab}>
          <button onClick={() => handleKebabMenuClick('edit')}>수정</button>
          <button onClick={() => handleKebabMenuClick('delete')}>삭제</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
