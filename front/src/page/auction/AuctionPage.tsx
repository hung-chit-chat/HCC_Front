import React from "react";

const AuctionItemPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* 전체 컨테이너 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 왼쪽 섹션: 이미지 */}
        <div>
          <img
            src="/path/to/your/image.jpg" // 경매 이미지 경로
            alt="Auction Item"
            className="w-full rounded-lg shadow-md"
          />
          {/* 하단의 작은 이미지들 */}
          <div className="flex mt-4 space-x-2">
            <img
              src="/path/to/your/thumbnail1.jpg"
              alt="Thumbnail 1"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <img
              src="/path/to/your/thumbnail2.jpg"
              alt="Thumbnail 2"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <img
              src="/path/to/your/thumbnail3.jpg"
              alt="Thumbnail 3"
              className="w-20 h-20 rounded-lg object-cover"
            />
          </div>
        </div>

        {/* 오른쪽 섹션: 상품 정보 */}
        <div>
          <p className="text-sm text-gray-500">경매상품 ID k1155062458</p>
          <h1 className="text-2xl font-bold mb-2">
            【우노아키요의A5판Postcard】 「마포십반납량축제2014」 포스터
          </h1>
          <div className="text-gray-500 mb-4">가구/인테리어 • 3일 전</div>

          {/* 가격 및 정보 */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm">입찰건수</p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="text-right">
              <p className="text-sm">남은시간</p>
              <p className="text-2xl font-bold text-red-500">1:32:55</p>
            </div>
          </div>

          <div className="border-t border-b py-4">
            <div className="flex justify-between">
              <div>
                <p className="text-sm">시작가격</p>
                <p className="text-xl font-bold">700円</p>
              </div>
              <div className="text-right">
                <p className="text-sm">현재가격</p>
                <p className="text-xl font-bold">700円</p>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500">
              일본 소비세 포함가격
            </div>
          </div>

          {/* 버튼들 */}
          <div className="flex mt-6 space-x-4">
            <button className="flex-grow bg-black text-white py-3 rounded-lg text-lg">
              입찰하기
            </button>
            <button className="flex-grow border border-gray-300 py-3 rounded-lg text-lg">
              관심등록
            </button>
          </div>

          {/* 추가 정보 */}
          <p className="mt-4 text-sm text-gray-500">
            입찰 및 낙찰시에는 취소가 되지 않으니 상품 문의 후 신중한 입찰
            부탁드립니다.
          </p>

          {/* 출품자 정보 */}
          <div className="mt-8 p-4 border border-gray-300 rounded-lg">
            <p className="text-sm text-gray-500">출품자 정보</p>
            <div className="flex justify-between items-center mt-2">
              <div>
                <p className="text-sm font-bold">아이디</p>
                <p>tkg1008</p>
              </div>
              <button className="flex items-center space-x-2">
                <span className="text-pink-500">❤️</span>
                <span>관심판매자 등록</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionItemPage;
