import React from 'react';
import classNames from '@/utils/classNames.ts';
import type * as ModalType from '@/types/modal.ts';

interface Props extends ModalType.Modal {
  children: React.ReactNode;
  className?: string;
  onBgClick?: () => void;
}

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
