import { FiSearch } from "react-icons/fi"; // react-icons 사용하여 돋보기 아이콘 추가

const SearchBar = () => {
  return (
    <div className="flex items-center w-full max-w-md rounded-full border border-gray-300 p-2">
      <input
        type="text"
        placeholder="검색"
        className="flex-grow outline-none px-4 text-gray-600 placeholder-gray-400"
      />
      <button className="p-2">
        <FiSearch className="text-gray-600" size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
