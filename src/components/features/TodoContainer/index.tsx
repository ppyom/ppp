import { useMemo } from 'react';
import Checkbox from '@/components/common/Checkbox';
import TodoInput from '@/components/features/TodoInput';
import TodoItem from '@/components/features/TodoItem';
import EmptyList from '@/components/common/EmptyList';
import useCheckbox from '@/hooks/useCheckbox.ts';
import useTodo from '@/hooks/useTodo.ts';
import styles from './styles.module.css';

const TodoContainer = () => {
  const { todoList: _todoList } = useTodo();
  const { checked, setChecked } = useCheckbox(false);
  const todoList = useMemo(
    () => Object.values(_todoList).filter((t) => checked || !t.isCompleted),
    [_todoList, checked],
  );
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
        {todoList.map((t) => (
          <TodoItem key={t.id} {...t} />
        ))}
        {todoList.length === 0 && <EmptyList />}
      </div>
    </section>
  );
};

export default TodoContainer;
