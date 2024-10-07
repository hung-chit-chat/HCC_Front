import React from "react";
import Modal from "react-modal";

interface PostModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "20px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const PostModal: React.FC<PostModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Upload Modal"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">새 게시물 올리기</h2>
      <div>
        <textarea
          placeholder="공유하고 싶은 이야기들을 얘기해보세요."
          className="w-full border min-h-[400px] border-gray-300 rounded p-2 mb-2"
        ></textarea>
        <input
          type="file"
          className="w-full border border-gray-300 rounded p-2 mb-2"
        />
      </div>
      <button
        onClick={onRequestClose}
        className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-200"
      >
        Close
      </button>
    </Modal>
  );
};

export default PostModal;
