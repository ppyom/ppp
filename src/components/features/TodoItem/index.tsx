import { useState } from 'react';
import { FaClock } from 'react-icons/fa6';
import { FiCheck, FiMoreVertical } from 'react-icons/fi';
import Button from '@/components/common/Button';
import classNames from '@/utils/classNames.ts';
import type { Todo } from '@/types/todo.ts';
import styles from './styles.module.css';

interface Props extends Todo {}

const TodoItem = ({ title, deadline, isCompleted }: Props) => {
  const [editMode] = useState(false);
  const handleMenuOpen = () => {
    // TODO 케밥 메뉴 오픈
  };
  const handleComplete = () => {
    // TODO 완료 처리
  };
  return (
    <div
      className={classNames(styles.todo, isCompleted && styles.complete)}
      onClick={handleComplete}
    >
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      {deadline && (
        <p className={styles.deadline}>
          <FaClock />
          <span>{deadline}</span>
        </p>
      )}
      <div className={styles.buttons}>
        <Button
          className={styles.menu}
          Icon={FiMoreVertical}
          onClick={handleMenuOpen}
        />
        {editMode && <Button className={styles.ok} Icon={FiCheck} active />}
      </div>
    </div>
  );
};

export default TodoItem;
