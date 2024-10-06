import SearchBar from "../../components/filter/search";
import SelectTab from "../../components/filter/selectTab";
import ShopCard from "../../components/card/shopCard";

const ShopPage = () => {
  const shopItems = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
  }));
  return (
    <div className="flex flex-row w-full">
      <div className="border-2 border-gray-300 rounded-lg p-4 w-80"></div>
      <div className="flex-grow px-10">
        <div className="flex justify-between w-full mb-4 px-10">
          <SearchBar />
          <SelectTab />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {shopItems.map((item) => (
            <ShopCard key={item.id} id={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
