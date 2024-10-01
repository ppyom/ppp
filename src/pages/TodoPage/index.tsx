import PageLayout from '@/components/layout/PageLayout';
import TodoContainer from '@/components/features/TodoContainer';
import styles from './styles.module.css';

const TodoPage = () => {
  return (
    <PageLayout title="할 일" hideTitle className={styles.page}>
      <TodoContainer />
    </PageLayout>
  );
};

export default TodoPage;
