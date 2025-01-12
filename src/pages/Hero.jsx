import React from "react";
import Firework from "../components/Firework";
import Typist from "react-typist";
import {
  TelegramPlane,
  FacebookF,
  Twitter,
  Instagram,
  Linkedin,
} from "@styled-icons/fa-brands";
import { useSelector } from "react-redux";

export const Hero = () => {
  const mode = useSelector((state) => state.theme.mode);
  return (
    <section id="home" className="relative h-screen text-white overflow-hidden">
      {/* Fireworks Background */}
      <div className="absolute inset-0 z-0">
        <Firework />
      </div>

      {/* Main Content */}
      <div className="relative w-full lg:h-[100vh] h-[90vh] ">
        <div className="absolute bottom-0 w-full dark:text-white px-4 py-2 text-center">
          <a className="flex items-center justify-center" data-aos="fade-up">
            <img
              className="items-center justify-center"
              src="https://iili.io/2UwZDb4.png"
              alt="2UwZDb4.png"
              border="0"
            />
          </a>

          <Typist className="text-black dark:text-white flex item-center  justify-center text-lg  px-4 sm:px-6 md:px-10 lg:mx-52  text-center animate__animated animate__fadeIn animate__delay-1s ">
            <p className=" text-center lg:mt-2">
              Hello, I'm {""}
              <span className="font-bold text-blue-500 w-full ">
                Toewaioo
              </span>{" "}
              👋
            </p>
            <Typist.Delay ms={500} />
          </Typist>
          <Typist className=" text-black dark:text-white flex item-center  justify-center text-lg px-4 sm:px-6 md:px-10   lg:mx-52 text-center animate__animated animate__fadeIn animate__delay-1s ">
            <p className="break-words">
              I craft <span className="text-green-400">responsive</span>,{" "}
              <span className="text-yellow-400">modern</span>, and{" "}
              <span className="text-red-400">innovative </span>
              web experiences.
            </p>
            <Typist.Delay ms={500} />
          </Typist>
          <Typist className=" text-black dark:text-white flex item-center  justify-center text-lg whitespace-nowrap  lg:mx-52 text-center animate__animated animate__fadeIn animate__delay-1s ">
            <p>Connect with me on your favorite platform!</p>
          </Typist>

          <div className=" mt-3 lg:mb-3 flex justify-center space-x-6" data-aos="fade-up">
            <a
              href="https://t.me/TwowT2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500  hover:text-blue-400 transition-all duration-300 text-2xl "
            >
              <TelegramPlane size={30} />
            </a>
            <a
              href="https://facebook.com/toewaioo2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-600 transition-all duration-300 text-2xl"
            >
              <FacebookF size={30} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-sky-500 transition-all duration-300 text-2xl"
            >
              <Twitter size={30} />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-500 transition-all duration-300 text-2xl"
            >
              <Instagram size={30} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-all duration-300 text-2xl"
            >
              <Linkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
