import Image from "next/image";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { FiLogOut } from "react-icons/fi";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  return (
    <aside className="h-screen mt-20 bg-main-red text-white flex flex-col justify-between p-6 rounded-r-lg -slate-600">
      <div>
        <div className="flex items-center flex-col">
          <Image
            src="/photo1.png"
            alt="User profile"
            width={80}
            height={80}
            className="rounded-full absolute top-[110px] shadow shadow-slate-600"
          />
          <div className="text-center mt-2">
            <h3 className="text-lg font-semibold">Sundar Gurung</h3>
            <p className="text-sm">sundargurung360@gmail.com</p>
          </div>
        </div>

        <nav className="mt-10 space-y-6">
          <a href="#" className="block text-lg flex items-center">
            <i className="fas fa-th-large mr-3"></i>
            Dashboard
          </a>
          <a href="vital_task" className="block text-lg flex items-center">
            <i className="fas fa-exclamation-circle mr-3"></i>
            Vital Task
          </a>
          <a href="#" className=" text-lg flex items-center">
            <i className="fas fa-clipboard-check mr-3"></i>
            My Task
          </a>
          <a href="#" className="text-lg flex items-center">
            <i className="fas fa-tasks mr-3"></i>
            Task Categories
          </a>
          <a href="#" className=" text-lg flex items-center">
            <i className="fas fa-cog mr-3"></i>
            Settings
          </a>
          <a href="#" className="text-lg flex items-center">
            <i className="fas fa-question-circle mr-3"></i>
            Help
          </a>
        </nav>
      </div>
      <div>
        <a href="#" className="text-lg flex items-center ">
          <FiLogOut className="mr-3" /> Logout
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
