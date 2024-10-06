import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";

const TabButtons = () => {
  const [selectedTab, setSelectedTab] = useState("신상품");

  const tabs = ["신상품", "추천순", "낮은가격순", "평점좋은순"];

  return (
    <div className="flex space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setSelectedTab(tab)}
          className={`flex items-center px-4 py-2 rounded-full flex-row w-32 ${
            selectedTab === tab
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {selectedTab === tab && <FiCheck className="mr-2" />}

          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabButtons;
