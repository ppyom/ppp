import React from 'react';
import classNames from '@/utils/classNames.ts';
import type * as ModalType from '@/types/modal.ts';

interface Props extends ModalType.Modal {
  children: React.ReactNode;
  className?: string;
  // 배경 클릭 시 발생할 이벤트
  onBgClick?: () => void;
}

// 모달 기본 베이스
const Modal = ({ id, children, className = '', onBgClick }: Props) => {
  const handleBgClick = ({ target }) => {
    if (onBgClick && target.matches(`#m_${id}`)) {
      onBgClick();
    }
  };
  return (
    <div id={`m_${id}`} className={'modal--bg'} onClick={handleBgClick}>
      <div className={classNames('modal', className)}>{children}</div>
    </div>
  );
};

export default Modal;
