import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLight, setDark } from "../redux/reducers/theme/themeSlice";

const Theme = () => {
  const [isListVisible, setIsListVisible] = useState(false); // State to toggle the visibility
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode); // Access current theme mode

  const handleThemeChange = (theme) => {
    const html = document.documentElement;
    if (theme === "dark") {
      dispatch(setDark());
      //html.classList.add("dark");
    } else {
      dispatch(setLight());
     // html.classList.remove("dark");
    }
    setIsListVisible(false); // Close the list after selection
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".relative")) {
        setIsListVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Theme button */}
      <button
        className="flex items-center space-x-2 px-4 py-2  transition"
        onClick={() => setIsListVisible((prev) => !prev)} // Toggle list visibility
      >
        <span className="flex space-x-1">
          <svg
            className={`${mode == "dark" ? "hidden" : ""} w-6 h-6`}
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              className="fill-sky-400/20 stroke-sky-500"
            ></path>
            <path
              d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
              className="stroke-sky-500"
            ></path>
          </svg>
          <svg
            className={`${mode == "light" ? "hidden" : "w-6 h-6"}`}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
              className="fill-sky-400/20"
            ></path>
            <path
              d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
              className="fill-sky-500"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
              className="fill-sky-500"
            ></path>
          </svg>
        </span>

        <span
          className={`${
            mode === "light" ? " text-black" : " text-white"
          }text-gray-700`}
        >
          Theme
        </span>
      </button>

      {/* Dropdown list */}
      {isListVisible && (
        <div className="absolute right-0 mt-2 w-28 bg-white dark:bg-gray-500 text-black dark:text-gray-100 rounded-md shadow-lg z-10">
          <ul className="py-2 ">
            <li
              onClick={() => handleThemeChange("light")}
              className={`flex items-center gap-2 px-4 py-2 hover:bg-grey dark:hover:bg-grey5 cursor-pointer ${
                mode === "light" && " text-secondary"
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className={`w-5 h-5 ${
                  mode == "light" ? "fill-sky-500" : "fill-slate-200"
                }`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_78_63)">
                  <path
                    d="M7.99998 3.99256C5.79024 3.99256 3.99254 5.79061 3.99254 8.00035C3.99254 10.2101 5.79024 12.0081 7.99998 12.0081C10.2094 12.0081 12.0074 10.2105 12.0074 8.00035C12.0074 5.79026 10.2094 3.99256 7.99998 3.99256ZM7.99998 2.81453C7.79266 2.81453 7.59383 2.73219 7.4472 2.58563C7.30057 2.43907 7.21814 2.24027 7.21805 2.03295V0.781931C7.21805 0.57455 7.30043 0.375663 7.44707 0.229022C7.59371 0.0823818 7.7926 0 7.99998 0C8.20736 0 8.40625 0.0823818 8.55289 0.229022C8.69953 0.375663 8.78191 0.57455 8.78191 0.781931V2.03295C8.78182 2.24027 8.6994 2.43907 8.55276 2.58563C8.40613 2.73219 8.2073 2.81453 7.99998 2.81453ZM7.99998 13.1851C7.8973 13.1851 7.79562 13.2053 7.70075 13.2446C7.60588 13.2839 7.51968 13.3415 7.44707 13.4141C7.37446 13.4868 7.31687 13.573 7.27757 13.6678C7.23828 13.7627 7.21805 13.8644 7.21805 13.9671V15.2177C7.21805 15.4251 7.30043 15.624 7.44707 15.7706C7.59371 15.9173 7.7926 15.9996 7.99998 15.9996C8.20736 15.9996 8.40625 15.9173 8.55289 15.7706C8.69953 15.624 8.78191 15.4251 8.78191 15.2177V13.9671C8.78182 13.7597 8.69941 13.5609 8.55279 13.4142C8.40617 13.2676 8.20733 13.1852 7.99998 13.1851ZM11.6662 4.33339C11.5197 4.18671 11.4374 3.98785 11.4374 3.78051C11.4374 3.57318 11.5197 3.37432 11.6662 3.22764L12.5509 2.34296C12.6232 2.26911 12.7095 2.21033 12.8047 2.17003C12.8999 2.12972 13.0021 2.1087 13.1055 2.10816C13.2088 2.10762 13.3113 2.12758 13.4069 2.16689C13.5025 2.2062 13.5894 2.26408 13.6625 2.33717C13.7356 2.41026 13.7934 2.49712 13.8327 2.59273C13.872 2.68833 13.892 2.79078 13.8915 2.89415C13.8909 2.99752 13.8699 3.09976 13.8296 3.19494C13.7893 3.29013 13.7305 3.37639 13.6567 3.44872L12.772 4.33339C12.6254 4.48001 12.4265 4.56238 12.2191 4.56238C12.0117 4.56238 11.8129 4.48001 11.6662 4.33339ZM4.33337 11.667C4.26081 11.5943 4.17463 11.5366 4.07976 11.4973C3.98489 11.4579 3.8832 11.4377 3.78049 11.4377C3.67779 11.4377 3.5761 11.4579 3.48123 11.4973C3.38636 11.5366 3.30018 11.5943 3.22762 11.667L2.34294 12.5513C2.19882 12.6984 2.11858 12.8965 2.11966 13.1025C2.12073 13.3084 2.20303 13.5057 2.34867 13.6513C2.49431 13.797 2.69154 13.8793 2.8975 13.8803C3.10347 13.8814 3.30154 13.8012 3.4487 13.657L4.33337 12.772C4.40599 12.6995 4.46361 12.6134 4.50291 12.5186C4.54222 12.4237 4.56245 12.3221 4.56245 12.2195C4.56245 12.1169 4.54222 12.0152 4.50291 11.9204C4.46361 11.8256 4.40599 11.7395 4.33337 11.667ZM13.1851 8C13.1851 7.56811 13.5351 7.21807 13.967 7.21807H15.218C15.3221 7.21585 15.4256 7.23444 15.5224 7.27273C15.6191 7.31102 15.7073 7.36825 15.7817 7.44106C15.8561 7.51387 15.9152 7.6008 15.9555 7.69675C15.9958 7.7927 16.0166 7.89574 16.0166 7.99982C16.0166 8.10391 15.9958 8.20695 15.9555 8.3029C15.9152 8.39884 15.8561 8.48577 15.7817 8.55859C15.7073 8.6314 15.6191 8.68863 15.5224 8.72692C15.4256 8.76521 15.3221 8.78379 15.218 8.78158H13.967C13.8644 8.78162 13.7627 8.76144 13.6678 8.72218C13.573 8.68293 13.4868 8.62536 13.4141 8.55278C13.3415 8.4802 13.2839 8.39403 13.2446 8.29918C13.2053 8.20433 13.1851 8.10267 13.1851 8ZM2.81451 8C2.81451 7.89732 2.79428 7.79564 2.75499 7.70077C2.71569 7.6059 2.65809 7.5197 2.58548 7.44709C2.51288 7.37448 2.42668 7.31689 2.33181 7.27759C2.23694 7.23829 2.13526 7.21807 2.03258 7.21807H0.781912C0.67785 7.21585 0.574393 7.23444 0.477607 7.27273C0.380821 7.31102 0.292654 7.36825 0.218276 7.44106C0.143897 7.51387 0.0848039 7.6008 0.044461 7.69675C0.00411808 7.7927 -0.0166626 7.89574 -0.0166626 7.99982C-0.0166626 8.10391 0.00411808 8.20695 0.044461 8.3029C0.0848039 8.39884 0.143897 8.48577 0.218276 8.55859C0.292654 8.6314 0.380821 8.68863 0.477607 8.72692C0.574393 8.76521 0.67785 8.78379 0.781912 8.78158H2.03293C2.24022 8.78158 2.43901 8.69923 2.58559 8.55266C2.73216 8.40608 2.81451 8.20729 2.81451 8ZM11.6662 11.667C11.8129 11.5204 12.0118 11.4381 12.2191 11.4381C12.4264 11.4381 12.6253 11.5204 12.772 11.667L13.6567 12.5516C13.8033 12.6983 13.8856 12.8971 13.8856 13.1045C13.8855 13.3118 13.8031 13.5106 13.6565 13.6572C13.5839 13.7298 13.4977 13.7874 13.4028 13.8266C13.308 13.8659 13.2063 13.8861 13.1037 13.8861C12.8963 13.8861 12.6975 13.8037 12.5509 13.657L11.6662 12.7724C11.5936 12.6998 11.536 12.6137 11.4967 12.5188C11.4574 12.424 11.4371 12.3223 11.4371 12.2197C11.4371 12.117 11.4574 12.0153 11.4967 11.9205C11.536 11.8257 11.5936 11.7395 11.6662 11.667ZM4.33337 4.33339C4.48 4.18675 4.56237 3.98788 4.56237 3.78051C4.56237 3.57315 4.48 3.37427 4.33337 3.22764L3.4487 2.34331C3.3011 2.20166 3.10386 2.12349 2.89929 2.12558C2.69473 2.12766 2.49913 2.20983 2.35445 2.35447C2.20976 2.4991 2.12753 2.69468 2.12538 2.89924C2.12323 3.10381 2.20133 3.30107 2.34294 3.44872L3.22762 4.33339C3.30018 4.40608 3.38636 4.46374 3.48123 4.50308C3.5761 4.54243 3.67779 4.56268 3.78049 4.56268C3.8832 4.56268 3.98489 4.54243 4.07976 4.50308C4.17463 4.46374 4.26081 4.40608 4.33337 4.33339Z"
                    fill="slate"
                  ></path>
                </g>
                <defs>
                  <clipPath>
                    <rect width="16" height="16" fill="stroke-slate-500"></rect>
                  </clipPath>
                </defs>
              </svg>
              Light
            </li>
            <li
              onClick={() => handleThemeChange("dark")}
              className={`flex items-center gap-2 px-4 py-2 hover:bg-grey1 dark:hover:bg-grey5 cursor-pointer ${
                mode === "dark" && "text-secondary "
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className={`w-6 h-6 ${
                  mode == "dark" ? "fill-sky-500" : "fill-slate-500"
                }`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                ></path>
                <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                ></path>
              </svg>
              Dark
            </li>
          </ul>
        </div>
      )}
      {/* {isListVisible && (
        <div
          className={`absolute   border-gray-500 rounded-bl-lg rounded-br-lg shadow-lg ${
            mode === "light"
              ? "bg-white/75 text-black"
              : "bg-gray-100/75 text-white"
          }`}
        >
          <ul className="">
            <li>
              <button
                className={`flex items-center w-full text-left space-x-2 px-5 p-3  hover:bg-gray-100 transition ${
                  mode === "light" ? "bg-gray-500 " : ""
                }`}
                onClick={() => handleThemeChange("light")}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_78_63)">
                    <path
                      d="M7.99998 3.99256C5.79024 3.99256 3.99254 5.79061 3.99254 8.00035C3.99254 10.2101 5.79024 12.0081 7.99998 12.0081C10.2094 12.0081 12.0074 10.2105 12.0074 8.00035C12.0074 5.79026 10.2094 3.99256 7.99998 3.99256ZM7.99998 2.81453C7.79266 2.81453 7.59383 2.73219 7.4472 2.58563C7.30057 2.43907 7.21814 2.24027 7.21805 2.03295V0.781931C7.21805 0.57455 7.30043 0.375663 7.44707 0.229022C7.59371 0.0823818 7.7926 0 7.99998 0C8.20736 0 8.40625 0.0823818 8.55289 0.229022C8.69953 0.375663 8.78191 0.57455 8.78191 0.781931V2.03295C8.78182 2.24027 8.6994 2.43907 8.55276 2.58563C8.40613 2.73219 8.2073 2.81453 7.99998 2.81453ZM7.99998 13.1851C7.8973 13.1851 7.79562 13.2053 7.70075 13.2446C7.60588 13.2839 7.51968 13.3415 7.44707 13.4141C7.37446 13.4868 7.31687 13.573 7.27757 13.6678C7.23828 13.7627 7.21805 13.8644 7.21805 13.9671V15.2177C7.21805 15.4251 7.30043 15.624 7.44707 15.7706C7.59371 15.9173 7.7926 15.9996 7.99998 15.9996C8.20736 15.9996 8.40625 15.9173 8.55289 15.7706C8.69953 15.624 8.78191 15.4251 8.78191 15.2177V13.9671C8.78182 13.7597 8.69941 13.5609 8.55279 13.4142C8.40617 13.2676 8.20733 13.1852 7.99998 13.1851ZM11.6662 4.33339C11.5197 4.18671 11.4374 3.98785 11.4374 3.78051C11.4374 3.57318 11.5197 3.37432 11.6662 3.22764L12.5509 2.34296C12.6232 2.26911 12.7095 2.21033 12.8047 2.17003C12.8999 2.12972 13.0021 2.1087 13.1055 2.10816C13.2088 2.10762 13.3113 2.12758 13.4069 2.16689C13.5025 2.2062 13.5894 2.26408 13.6625 2.33717C13.7356 2.41026 13.7934 2.49712 13.8327 2.59273C13.872 2.68833 13.892 2.79078 13.8915 2.89415C13.8909 2.99752 13.8699 3.09976 13.8296 3.19494C13.7893 3.29013 13.7305 3.37639 13.6567 3.44872L12.772 4.33339C12.6254 4.48001 12.4265 4.56238 12.2191 4.56238C12.0117 4.56238 11.8129 4.48001 11.6662 4.33339ZM4.33337 11.667C4.26081 11.5943 4.17463 11.5366 4.07976 11.4973C3.98489 11.4579 3.8832 11.4377 3.78049 11.4377C3.67779 11.4377 3.5761 11.4579 3.48123 11.4973C3.38636 11.5366 3.30018 11.5943 3.22762 11.667L2.34294 12.5513C2.19882 12.6984 2.11858 12.8965 2.11966 13.1025C2.12073 13.3084 2.20303 13.5057 2.34867 13.6513C2.49431 13.797 2.69154 13.8793 2.8975 13.8803C3.10347 13.8814 3.30154 13.8012 3.4487 13.657L4.33337 12.772C4.40599 12.6995 4.46361 12.6134 4.50291 12.5186C4.54222 12.4237 4.56245 12.3221 4.56245 12.2195C4.56245 12.1169 4.54222 12.0152 4.50291 11.9204C4.46361 11.8256 4.40599 11.7395 4.33337 11.667ZM13.1851 8C13.1851 7.56811 13.5351 7.21807 13.967 7.21807H15.218C15.3221 7.21585 15.4256 7.23444 15.5224 7.27273C15.6191 7.31102 15.7073 7.36825 15.7817 7.44106C15.8561 7.51387 15.9152 7.6008 15.9555 7.69675C15.9958 7.7927 16.0166 7.89574 16.0166 7.99982C16.0166 8.10391 15.9958 8.20695 15.9555 8.3029C15.9152 8.39884 15.8561 8.48577 15.7817 8.55859C15.7073 8.6314 15.6191 8.68863 15.5224 8.72692C15.4256 8.76521 15.3221 8.78379 15.218 8.78158H13.967C13.8644 8.78162 13.7627 8.76144 13.6678 8.72218C13.573 8.68293 13.4868 8.62536 13.4141 8.55278C13.3415 8.4802 13.2839 8.39403 13.2446 8.29918C13.2053 8.20433 13.1851 8.10267 13.1851 8ZM2.81451 8C2.81451 7.89732 2.79428 7.79564 2.75499 7.70077C2.71569 7.6059 2.65809 7.5197 2.58548 7.44709C2.51288 7.37448 2.42668 7.31689 2.33181 7.27759C2.23694 7.23829 2.13526 7.21807 2.03258 7.21807H0.781912C0.67785 7.21585 0.574393 7.23444 0.477607 7.27273C0.380821 7.31102 0.292654 7.36825 0.218276 7.44106C0.143897 7.51387 0.0848039 7.6008 0.044461 7.69675C0.00411808 7.7927 -0.0166626 7.89574 -0.0166626 7.99982C-0.0166626 8.10391 0.00411808 8.20695 0.044461 8.3029C0.0848039 8.39884 0.143897 8.48577 0.218276 8.55859C0.292654 8.6314 0.380821 8.68863 0.477607 8.72692C0.574393 8.76521 0.67785 8.78379 0.781912 8.78158H2.03293C2.24022 8.78158 2.43901 8.69923 2.58559 8.55266C2.73216 8.40608 2.81451 8.20729 2.81451 8ZM11.6662 11.667C11.8129 11.5204 12.0118 11.4381 12.2191 11.4381C12.4264 11.4381 12.6253 11.5204 12.772 11.667L13.6567 12.5516C13.8033 12.6983 13.8856 12.8971 13.8856 13.1045C13.8855 13.3118 13.8031 13.5106 13.6565 13.6572C13.5839 13.7298 13.4977 13.7874 13.4028 13.8266C13.308 13.8659 13.2063 13.8861 13.1037 13.8861C12.8963 13.8861 12.6975 13.8037 12.5509 13.657L11.6662 12.7724C11.5936 12.6998 11.536 12.6137 11.4967 12.5188C11.4574 12.424 11.4371 12.3223 11.4371 12.2197C11.4371 12.117 11.4574 12.0153 11.4967 11.9205C11.536 11.8257 11.5936 11.7395 11.6662 11.667ZM4.33337 4.33339C4.48 4.18675 4.56237 3.98788 4.56237 3.78051C4.56237 3.57315 4.48 3.37427 4.33337 3.22764L3.4487 2.34331C3.3011 2.20166 3.10386 2.12349 2.89929 2.12558C2.69473 2.12766 2.49913 2.20983 2.35445 2.35447C2.20976 2.4991 2.12753 2.69468 2.12538 2.89924C2.12323 3.10381 2.20133 3.30107 2.34294 3.44872L3.22762 4.33339C3.30018 4.40608 3.38636 4.46374 3.48123 4.50308C3.5761 4.54243 3.67779 4.56268 3.78049 4.56268C3.8832 4.56268 3.98489 4.54243 4.07976 4.50308C4.17463 4.46374 4.26081 4.40608 4.33337 4.33339Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath>
                      <rect width="16" height="16" fill="currentColor"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span>Light</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full text-left space-x-2 p-3 px-5  hover:rounded-bl-lg hover:rounded-br-lg hover:bg-gray-100 transition ${
                  mode === "dark"
                    ? "bg-gray-500  rounded-bl-lg rounded-br-lg"
                    : ""
                }`}
                onClick={() => handleThemeChange("dark")}
              >
                <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                    class="fill-sky-400/20"
                  ></path>
                  <path
                    d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                    class="fill-sky-500"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                    class="fill-sky-500"
                  ></path>
                </svg>
                <span>Dark</span>
              </button>
            </li>
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default Theme;
