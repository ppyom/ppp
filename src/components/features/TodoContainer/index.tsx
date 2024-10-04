import Checkbox from '@/components/common/Checkbox';
import TodoInput from '@/components/features/TodoInput';
import TodoItem from '@/components/features/TodoItem';
import useCheckbox from '@/hooks/useCheckbox.ts';
import useTodo from '@/hooks/useTodo.ts';
import styles from './styles.module.css';

const TodoContainer = () => {
  const { todoList } = useTodo();
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
        {Object.values(todoList)
          .filter((t) => checked || !t.isCompleted)
          .map((t) => (
            <TodoItem key={t.id} {...t} />
          ))}
      </div>
    </section>
  );
};

export default TodoContainer;
