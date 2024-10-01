import { useState } from 'react';
import { FaClock } from 'react-icons/fa6';
import { FiCheck, FiMoreVertical } from 'react-icons/fi';
import Button from '@/components/common/Button';
import classNames from '@/utils/classNames.ts';
import type { Todo } from '@/types/todo.ts';
import styles from './styles.module.css';

interface Props extends Todo {}

const TodoItem = ({ title, deadline, isCompleted }: Props) => {
  const [kebabOpen, setKebabOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const handleMenuOpen = () => {
    setKebabOpen(true);
  };
  const handleComplete = () => {
    // TODO 완료 처리
  };
  const handleKebabMenuClick = (type: 'edit' | 'delete') => {
    if (type === 'edit') {
      setEditMode(true);
    } else {
      // TODO 삭제 처리
    }
    setKebabOpen(false);
  };
  const handleDeadlineChange = () => {
    // TODO Deadline 설정
  };
  const handleEdit = () => {
    // TODO 저장
    setEditMode(false);
  };
  return (
    <div
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
          <Button className={styles.ok} Icon={FiCheck} active />
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
