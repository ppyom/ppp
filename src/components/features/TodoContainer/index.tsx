import TodoInput from '@/components/features/TodoInput';
import styles from './styles.module.css';

const TodoContainer = () => {
  return (
    <section className={styles.container}>
      <h3>ToDoList</h3>
      <TodoInput />
    </section>
  );
};

export default TodoContainer;
