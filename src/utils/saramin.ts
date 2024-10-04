import {
  EducationCode,
  ExperienceCode,
  ExperienceLevel,
} from '@/types/saramin.ts';

const experienceText = (code: ExperienceCode, options: ExperienceLevel) => {
  if (options.code === 0) {
    return '경력무관';
  } else if (options.code === 1) {
    return '신입';
  } else {
    let text = '';
    const { min, max } = options;
    if (max) {
      text = `경력 ${min}~${max}년`;
    } else {
      text = `경력 ${min}년`;
    }
    if (code === 3) {
      text = `신입/${text}`;
    }
    return text;
  }
};
const educationText = (codeStr: EducationCode) => {
  const code = parseInt(codeStr);
  if (code === 0) {
    return '학력무관';
  }
  let text = '';
  switch (code % 5) {
    case 0:
      text = '박사';
      break;
    case 1:
      text = '고졸';
      break;
    case 2:
      text = '초대졸';
      break;
    case 3:
      text = '대졸';
      break;
    case 4:
      text = '석사';
      break;
  }
  if (code > 5) {
    text += '↑';
  }
  return text;
};
const getLocationName = (locationStr: string) => {
  return locationStr.split(',')[0].split(' &gt; ')[1];
};

export { experienceText, educationText, getLocationName };
