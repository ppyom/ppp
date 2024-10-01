type ExperienceCode =
  | 0 // 무관
  | 1 // 신입
  | 2; // 경력
interface AnyExperience {
  code: 0;
}
interface NewExperience {
  code: 1;
}
interface Experience {
  code: 2;
  min?: number;
  max?: number;
}
type ExperienceLevel = AnyExperience | NewExperience | Experience;

type EducationCode =
  | 0 // 무관
  | 1 // 고졸
  | 2 // 초대졸
  | 3 // 대졸
  | 4 // 석사
  | 5 // 박사
  | 6 // 고졸↑
  | 7 // 초대졸↑
  | 8 // 대졸↑
  | 9; // 석사↑

interface Position {
  title: string;
  location: {
    name: string;
  };
  'experience-level': ExperienceLevel;
  'required-education-level': {
    code: EducationCode;
  };
}
interface Saramin {
  id: string;
  url: string;
  position: Position;
  company: {
    detail: {
      href: string;
      name: string;
    };
  };
  'expiration-timestamp': string;
  'close-type': {
    code:
      | '1' // 접수 마감일
      | '2' // 채용시 마감
      | '3'; // 상시 채용
  };
}

export type { Saramin, ExperienceCode, ExperienceLevel, EducationCode };
