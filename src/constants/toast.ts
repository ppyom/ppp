import { Toast } from '@/types/toast.ts';

const toast = {
  common: {
    remove: {
      type: 'success',
      message: '삭제되었습니다.',
    },
    save: {
      type: 'success',
      message: '저장되었습니다.',
    },
  },
  schedule: {
    inputTitle: {
      type: 'error',
      message: '일정 제목을 입력해주세요.',
    },
  },
  todo: {
    inputContent: {
      type: 'error',
      message: '내용을 입력해주세요.',
    },
    created: {
      type: 'success',
      message: '할 일이 등록되었어요.',
    },
    complete: (isCompleted: boolean): Omit<Toast, 'id'> => ({
      type: 'success',
      message: isCompleted ? '할 일을 완료했어요.' : '완료를 취소했어요.',
    }),
  },
  me: {
    copyMail: {
      type: 'success',
      message: '개발자 메일 주소가 복사되었습니다.',
    },
  },
} as const;

export default toast;
