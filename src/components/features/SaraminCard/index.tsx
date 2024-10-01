import { ExperienceLevel, Saramin } from '@/types/saramin.ts';
import { FiMapPin } from 'react-icons/fi';
import { formatter } from '@/utils/datetimeFormatter.ts';
import styles from './styles.module.css';
import {
  educationText,
  experienceText,
  getLocationName,
} from '@/utils/saramin.ts';

interface Props extends Saramin {}

const SaraminCard = ({
  position: {
    title,
    location: { name: locationName },
    'experience-level': exp,
    'required-education-level': edu,
  },
  company: {
    detail: { name: companyName },
  },
  'expiration-timestamp': endDate,
  'close-type': { code: closeCode },
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src="/images/saramin_logo.png" alt={title} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.company}>{companyName}</p>
      <p className={styles.info}>
        <FiMapPin />
        <span className={styles.location}>{getLocationName(locationName)}</span>
        <span className={styles.experience}>
          {experienceText(exp.code, { ...exp } as ExperienceLevel)}
        </span>
        <span>{educationText(edu.code)}</span>
      </p>
      <div className={styles.end}>
        {closeCode === '3'
          ? '상시채용'
          : closeCode === '2'
            ? '채용시 마감'
            : formatter('~MM.DD(ddd)', parseInt(endDate) * 1000)}
      </div>
    </div>
  );
};

export default SaraminCard;
