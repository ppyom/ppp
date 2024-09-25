import { useEffect } from 'react';
import {
  FaCheckSquare,
  FaExclamationTriangle,
  FaQuestionCircle,
} from 'react-icons/fa';
import classNames from '@/utils/classNames.ts';
import type * as ToastType from '@/types/toast.ts';
import styles from './styles.module.css';

interface Props extends ToastType.Toast {}

const Toast = ({ id, type, message, duration }: Props) => {
  useEffect(() => {
    const $toast = document.querySelector(`#t_${id}`)!;

    const activeTimer = setTimeout(() => {
      $toast.classList.add(styles.active);
    }, 1);
    const removeTimer = setTimeout(() => {
      $toast.classList.remove(styles.active);
    }, duration);

    return () => {
      clearTimeout(activeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div id={`t_${id}`} className={styles.toast}>
      {type && (
        <span className={classNames(styles.icon, styles[type])}>
          {type === 'success' ? (
            <FaCheckSquare />
          ) : type === 'error' ? (
            <FaExclamationTriangle />
          ) : (
            <FaQuestionCircle />
          )}
        </span>
      )}
      <p>{message}</p>
    </div>
  );
};

export default Toast;
