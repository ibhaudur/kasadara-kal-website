import React from 'react';
import { ModalProps } from '../../types/component.types';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999999] bg-[#0000008f] bg-opacity-10" data-testid="modal">
      <div className="bg-white rounded-3xl shadow-lg">
        <div className="flex justify-between items-center p-5">
          <h5 className="text-[18px] font-semibold">{title}</h5>
          <button onClick={onClose} className="text-gray-500 cursor-pointer text-3xl hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="px-5 pb-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Modal);
