import React from "react";
import { Link } from "react-router-dom";

const linkClassName = "block py-2 px-4 hover:bg-purple-200 rounded";

const Sidebar: React.FC = () => {
  return (
    <aside
      className="fixed top-0 left-0 bg-purple-100 h-screen p-1 md:p-4 overflow-y-auto
                      w-[120px] md:w-64 text-sm md:text-xl font-bold transition-all duration-300"
    >
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/playground" className={linkClassName}>
              Playground
            </Link>
          </li>
          <li>
            <Link to="/search" className={linkClassName}>
              Search
            </Link>
          </li>
          <li>
            <Link to="/favorite" className={linkClassName}>
              Favorite
            </Link>
          </li>
          <li>
            <Link to="/shop" className={linkClassName}>
              Shop
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-auto pt-4">
        <button
          onClick={() => {
            /* 로그아웃 로직 */
          }}
          className="w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 whitespace-nowrap overflow-hidden text-ellipsis"
        >
          로그아웃
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
