import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Theme from "./Theme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past a threshold
        setIsVisible(false);
      } else {
        // Scrolling up or near the top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-sm shadow-md z-10 px-4 py-4 flex items-center justify-between transition-transform duration-300 bg-gray-200 dark:bg-gray-900 dark:text-gray-400 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="text-xl font-bold">Portfolio</div>
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center bg-white/100 dark:bg-white/20 rounded px-2 py-2">
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
