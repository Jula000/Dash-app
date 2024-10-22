import React from "react";
import { FiSearch, FiBell, FiCalendar } from "react-icons/fi";

const DashboardHeader: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-[#F8F8F8] px-8 py-4 shadow-xl">
      <div className="text-3xl font-semibold">
        <span className="text-main-red">Dash</span>
        <span className="text-black">board</span>
      </div>

      <div className="flex-grow mx-10 relative">
        <input
          type="text"
          placeholder="Search your task here..."
          className="w-full h-12 px-5 pr-12 rounded-xl shadow-lg"
        />
        <button className="absolute -right-0.5 -top-0.25 text-white bg-main-red p-3.5 rounded-xl">
          <FiSearch size={20} />
        </button>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-white bg-main-red p-3 rounded-xl">
          <FiBell size={24} />
        </button>
        <button className="text-white bg-main-red p-3 rounded-xl">
          <FiCalendar size={24} />
        </button>
        <div className="text-black">
          <span className="block">Tuesday</span>
          <span className="text-[#3ABEFF]">20/06/2023</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
