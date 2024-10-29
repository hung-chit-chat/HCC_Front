import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { FiX, FiImage, FiGlobe, FiUsers } from "react-icons/fi";

interface PostModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  memberId: string;
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
    borderRadius: "12px",
    padding: "0",
    maxWidth: "500px",
    width: "100%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const PostModal = ({ isOpen, onRequestClose, memberId }: PostModalProps) => {
  const [contents, setContents] = useState("");
  const [publicScope, setPublicScope] = useState("PUBLIC");
  const [media, setMedia] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("memberId", memberId);
    formData.append("publicScope", publicScope);
    formData.append("contents", contents);
    if (media) {
      formData.append("media", media);
    }

    try {
      const response = await axios.post("/feed/feeds", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.result === "success") {
        console.log("Post created successfully");
        onRequestClose();
      } else {
        console.error("Error creating post:", response.data);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Upload Modal"
    >
      <div className="relative p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          새 게시물 올리기
        </h2>
        <button
          onClick={onRequestClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <FiX size={24} />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="flex items-center mb-2 text-gray-700">
              {publicScope === "PUBLIC" ? (
                <FiGlobe className="mr-2" />
              ) : (
                <FiUsers className="mr-2" />
              )}
              <span>공개 범위</span>
            </label>
            <select
              value={publicScope}
              onChange={(e) => setPublicScope(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
            >
              <option value="PUBLIC">전체 공개</option>
              <option value="FRIEND">친구 공개</option>
            </select>
          </div>
          <div className="mb-6">
            <textarea
              placeholder="공유하고 싶은 이야기들을 얘기해보세요."
              className="w-full border min-h-[200px] border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 resize-none"
              value={contents}
              onChange={(e) => setContents(e.target.value)}
              maxLength={3000}
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              htmlFor="file-upload"
              className="flex items-center justify-center w-full h-12 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-purple-400 focus:outline-none"
            >
              <span className="flex items-center space-x-2">
                <FiImage className="text-gray-600" />
                <span className="font-medium text-gray-600">
                  {media ? media.name : "이미지 추가하기"}
                </span>
              </span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="hidden"
                onChange={(e) =>
                  setMedia(e.target.files ? e.target.files[0] : null)
                }
              />
            </label>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onRequestClose}
              className="px-6 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-200"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors duration-200"
            >
              게시하기
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default PostModal;
