import styles from './styles.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100"
        height="100"
      >
        <circle
          strokeDasharray="164.93361431346415 56.97787143782138"
          r="35"
          cy="50"
          cx="50"
        />
      </svg>
    </div>
  );
};

export default Loading;
