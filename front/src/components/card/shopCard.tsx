import { useNavigate } from "react-router-dom";
const ShopCard = ({ id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/shop/${id}`);
  };
  return (
    <div
      className="max-w-xs mx-auto border rounded-lg shadow-lg"
      onClick={handleClick}
    >
      <div className="p-4">
        <div className="w-full h-56 bg-gray-200 rounded-lg flex items-center justify-center">
          <img
            src="/image/background.jpg"
            alt="상품 이미지"
            className="object-cover w-full h-full rounded-lg"
            onError={(e) => (e.currentTarget.src = "/path/to/placeholder.png")}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">고양이 사료</h3>
          <p className="text-lg font-bold mt-2">22000원</p>
        </div>
      </div>
    </div>
  );
};
export default ShopCard;
