import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">동네 인증이 필요합니다!</h2>
        <p className="mb-4">채팅을 하기 위헤서 동네인증이 필요합니다</p>
        <div>
          <button
            onClick={onClose}
            className="bg-violet-400 w-full text-white px-4 py-3 rounded-md hover:bg-violet-600 my-2 "
          >
            인증하기
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 w-full text-black px-4 py-3 rounded-md hover:bg-gray-500 my-2"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
