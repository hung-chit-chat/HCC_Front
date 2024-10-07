import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        404 - 페이지를 찾을 수 없습니다
      </h1>
      <p className="text-lg mb-4">요청하신 페이지는 존재하지 않습니다.</p>
      <a href="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg">
        홈으로 돌아가기
      </a>
    </div>
  );
};

export default NotFound;
