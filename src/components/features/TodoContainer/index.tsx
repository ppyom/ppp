import { useState } from 'react';
import Checkbox from '@/components/common/Checkbox';
import TodoInput from '@/components/features/TodoInput';
import TodoItem from '@/components/features/TodoItem';
import useCheckbox from '@/hooks/useCheckbox.ts';
import type { Todo } from '@/types/todo.ts';
import styles from './styles.module.css';

const TodoContainer = () => {
  const [todo] = useState<Todo[]>([
    { id: '1', title: '할 일', deadline: '24.10.02 00:00' },
    { id: '2', title: '할 일' },
    { id: '3', title: '할 일', deadline: '24.10.03', isCompleted: true },
  ]);
  const { checked, setChecked } = useCheckbox(false);
  return (
    <section className={styles.container}>
      <h3>ToDoList</h3>
      <TodoInput />
      <Checkbox
        className={styles.checkbox}
        label="완료된 내역 포함"
        checked={checked}
        setChecked={setChecked}
      />
      <div className={styles.todolist}>
        {todo
          .filter((t) => checked || !t.isCompleted)
          .map((t) => (
            <TodoItem key={t.id} {...t} />
          ))}
      </div>
    </section>
  );
};

export default TodoContainer;
