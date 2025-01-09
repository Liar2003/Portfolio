import { useState } from "react";

import { Provider, useDispatch, useSelector } from "react-redux";
import Theme from "./Theme";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mode = useSelector((state) => state.theme.mode);

  return (
    <nav
      className={` w-full backdrop-blur-md shadow-md z-10 px-4 py-4 flex items-center justify-between transition-colors duration-300 ${
        mode === "light"
          ? "bg-white/40 text-black"
          : "bg-gray-900/75 text-white"
      }`}
    >
      <div className="text-xl font-bold">Portfolio</div>
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center bg-white/40  rounded px-2 py-2">
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none bg-transparent"
          />
          <button className="ml-2"></button>
        </div>
        <Theme />
      </div>
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      {isMenuOpen && (
        <div
          className={`absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg p-4 md:hidden`}
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-center border rounded px-2 py-1">
              <input
                type="text"
                placeholder="Search..."
                className="focus:outline-none bg-transparent"
              />
              <button className="ml-2">S</button>
            </div>
            <Theme />
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
