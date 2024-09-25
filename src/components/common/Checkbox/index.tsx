import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import classNames from '@/utils/classNames.ts';
import styles from './styles.module.css';

interface Props {
  label: string;
  className?: string;
  onClick?: (checked: boolean) => void;
}

const Checkbox = ({ className = '', label, onClick }: Props) => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxClick = () => {
    setChecked(!checked);
    onClick && onClick(checked);
  };
  return (
    <div
      className={classNames(styles.checkbox, className)}
      onClick={handleCheckboxClick}
    >
      <span className={classNames(styles.check, checked && styles.checked)}>
        {checked && <FaCheck />}
      </span>
      <p>{label}</p>
    </div>
  );
};

export default Checkbox;
