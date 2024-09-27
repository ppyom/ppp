import { FaCheck } from 'react-icons/fa';
import classNames from '@/utils/classNames.ts';
import styles from './styles.module.css';

interface Props {
  label: string;
  checked: boolean;
  setChecked: (prevState: boolean) => void;
  className?: string;
  onClick?: (checked: boolean) => void;
}

const Checkbox = ({
  label,
  checked,
  setChecked,
  className = '',
  onClick,
}: Props) => {
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
