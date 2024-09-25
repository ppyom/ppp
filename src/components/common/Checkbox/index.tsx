import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
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
      className={`${styles.checkbox} ${className}`}
      onClick={handleCheckboxClick}
    >
      <span className={`${styles.check} ${checked ? styles.checked : ''}`}>
        {checked && <FaCheck />}
      </span>
      <p>{label}</p>
    </div>
  );
};

export default Checkbox;
