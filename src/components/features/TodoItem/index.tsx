import { useState } from 'react';
import { FaClock } from 'react-icons/fa6';
import { FiCheck, FiMoreVertical } from 'react-icons/fi';
import Button from '@/components/common/Button';
import Confirm from '@/components/common/Confirm';
import TodoDeadlineModal from '@/components/features/TodoDeadlineModal';
import useModal from '@/hooks/useModal.ts';
import useToast from '@/hooks/useToast.ts';
import classNames from '@/utils/classNames.ts';
import { makeDatetime } from '@/utils/datetimeFormatter.ts';
import type { Todo } from '@/types/todo.ts';
import styles from './styles.module.css';

interface Props extends Todo {}

const TodoItem = ({ id, title, deadline, isCompleted }: Props) => {
  const { open } = useModal();
  const { setToast } = useToast();
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
      // TODO 완료 처리
      setToast({
        type: 'success',
        message: completed ? '할 일을 완료했어요.' : '완료를 취소했어요.',
      });
    }
  };
  const handleKebabMenuClick = (type: 'edit' | 'delete') => {
    if (type === 'edit') {
      setEditMode(true);
    } else {
      open(Confirm, {
        message: '삭제하시겠습니까?',
        ok: () => {
          // TODO 삭제 처리
          setToast({ type: 'success', message: '삭제되었습니다.' });
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
    // TODO 저장
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
