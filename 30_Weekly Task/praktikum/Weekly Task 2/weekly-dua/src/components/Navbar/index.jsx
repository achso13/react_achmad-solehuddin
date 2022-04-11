import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Sidebar from "../Sidebar";
import BrandLogo from "../BrandLogo";

export default function Navbar() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const handleClick = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <>
      {sidebarToggle && (
        <div
          className="fixed top-0 z-10 h-screen w-screen bg-black opacity-30"
          id="overlay"
          onClick={() => handleClick()}
        ></div>
      )}
      <div className="sticky top-0 flex h-16 w-full items-center justify-between bg-white px-4 shadow-md">
        <BrandLogo>React JS B</BrandLogo>
        <button
          className="text-2xl text-slate-700 hover:text-slate-900"
          onClick={() => handleClick()}
        >
          <HiMenuAlt3 />
        </button>
      </div>

      <Sidebar active={sidebarToggle} />
    </>
  );
}
