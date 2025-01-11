import { useEffect, useState } from "react";
import { content } from "../Content";
import { createElement } from "react";
import { Settings } from "@styled-icons/material-rounded";
import Theme from "../components/Theme";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <div className={`w-full flex justify-center items-center `}>
      <div
        className={`${
          isVisible ? "translate-y-0" : "-translate-y-[100rem]"
        } sm:cursor-pointer fixed gap-3 flex top-5 left-5 lg:left-10 z-[999] rounded-lg bg-slate-900 dark:bg-white/50 p-2`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <Settings className="text-sky-500" size={32} />
        <Theme />
      </div>
      <nav
        className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full duration-300 ${
          showMenu ? "bottom-3" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            href={item.link}
            onClick={() => setActive(i)}
            className={`w-10 h-10 text-xl p-2.5 rounded-full sm:cursor-pointer flex items-center
     ${i === active && "bg-gray-500 text-white"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
