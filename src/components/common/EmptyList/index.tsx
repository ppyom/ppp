import { IconType } from 'react-icons';
import { FaFileCircleXmark } from 'react-icons/fa6';
import styles from './styles.module.css';

interface Props {
  Icon?: IconType;
  text?: string;
}

const EmptyList = ({ Icon = FaFileCircleXmark, text }: Props) => {
  return (
    <div className={styles.empty}>
      <Icon />
      <p>{text || '리스트가 비어있습니다.'}</p>
    </div>
  );
};

export default EmptyList;
