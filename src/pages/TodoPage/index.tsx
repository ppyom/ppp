import PageLayout from '@/components/layout/PageLayout';
import styles from './styles.module.css';

const TodoPage = () => {
  return (
    <PageLayout title="할 일" hideTitle className={styles.page}>
      할 일
    </PageLayout>
  );
};

export default TodoPage;
