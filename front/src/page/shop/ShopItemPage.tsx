import { useState } from "react";
import LocationPopup from "../../components/popup/locationPopup";

const ShopItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <img
        src="/image/background.jpg"
        alt="상품 이미지"
        className="object-cover w-1/2 h-full rounded-lg"
        onError={(e) => (e.currentTarget.src = "/path/to/placeholder.png")}
      />
      <div className=" p-4 w-1/2  bg-white rounded-lg shadow-md">
        <div className="flex items-start">
          <img
            src="/image/background.jpg"
            alt="Product"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="ml-4 flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold">호수</h3>
                <p className="text-sm text-gray-500">남구 서동</p>
              </div>
              <div className="text-right">
                <button
                  className="border-2 border-slate-300 py-4 px-6 rounded-lg"
                  onClick={openModal}
                >
                  채팅하기
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-xl font-semibold">경량철재블랙 5단선반</h1>
          <p className="text-sm text-gray-500">가구/인테리어 • 3일 전</p>
          <p className="text-2xl font-bold text-gray-800 mt-2">5,500원</p>

          <p className="mt-4 text-gray-700">
            경량형 철재5단 선반(블랙색상) <br />
            미사용 새제품 박스포장되어있구요! <br />
            경량형선반이라 무거운 제품 적재는 안되구요~
            <br />
            적당한 용도로 사용하기에 적합한 선반입니다!
            <br />
            6세트 있습니다!
            <br />
            가로 90 세로 40 높이 180
          </p>
        </div>

        <div className="mt-4 border-t pt-4 flex justify-between text-gray-500 text-sm">
          <p>관심 65</p>
          <p>채팅 105</p>
          <p>조회 1353</p>
        </div>
      </div>
      <LocationPopup isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ShopItem;
