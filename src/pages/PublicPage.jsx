import React from "react";
import { useNavigate } from "react-router";
import Firework from "../components/Firework";
import Typist from "react-typist";
import {
  TelegramPlane,
  FacebookF,
  Twitter,
  Instagram,
  Linkedin,
} from "@styled-icons/fa-brands";

const PublicPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="relative h-screen text-white overflow-hidden">
        {/* Fireworks Background */}
        <div className="absolute inset-0 z-0">
          <Firework />
        </div>

        {/* Main Content */}
        <div className="relative w-full lg:h-[100vh] h-[90vh] ">
          <div className="absolute bottom-0 w-full text-white px-4 py-2 text-center">
            <a
              className="flex items-center justify-center"
              href="__blank"
            >
              <img
                className="items-center justify-center"
                src="https://iili.io/2UwZDb4.png"
                alt="2UwZDb4.png"
                border="0"
              />
            </a>

            <Typist className=" flex item-center  justify-center text-lg  px-4 sm:px-6 md:px-10 lg:mx-52  text-center animate__animated animate__fadeIn animate__delay-1s ">
              <p>
                Hello, I'm {""}
                <span className="font-bold text-blue-500 w-full ">
                  Toewaioo
                </span>{" "}
                👋
              </p>
              <Typist.Delay ms={500} />
            </Typist>
            <Typist className=" flex item-center  justify-center text-lg px-4 sm:px-6 md:px-10   lg:mx-52 text-center animate__animated animate__fadeIn animate__delay-1s ">
              <p className="break-words">
                I craft <span className="text-green-400">responsive</span>,{" "}
                <span className="text-yellow-400">modern</span>, and{" "}
                <span className="text-red-400">innovative </span>
                web experiences.
              </p>
              <Typist.Delay ms={500} />
            </Typist>
            <Typist className=" flex item-center  justify-center text-lg whitespace-nowrap  lg:mx-52 text-center animate__animated animate__fadeIn animate__delay-1s ">
              <p>Connect with me on your favorite platform!</p>
            </Typist>

            <div className=" mt-3 lg:mb-3 flex justify-center space-x-6">
              <a
                href="https://t.me/TwowT2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-all duration-300 text-2xl"
              >
                <TelegramPlane size={30} />
              </a>
              <a
                href="https://facebook.com/toewaioo2025"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600 transition-all duration-300 text-2xl"
              >
                <FacebookF size={30} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-500 transition-all duration-300 text-2xl"
              >
                <Twitter size={30} />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition-all duration-300 text-2xl"
              >
                <Instagram size={30} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-700 transition-all duration-300 text-2xl"
              >
                <Linkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-r from-blue-100 via-gray-50 to-blue-100 text-center transition-all duration-500 ease-in-out"
      >
        <h2 className="text-4xl font-semibold mb-6 text-blue-600 animate__animated animate__fadeInUp">
          Contact Me
        </h2>
        <p className="text-lg text-gray-700 mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Have any questions or need support?,<br></br> We're here to help!{" "}
          <br></br>Reach out to us anytime.
        </p>

        {/* Email Form */}
        <div className="mb-8 animate__animated animate__fadeIn animate__delay-2s">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Send me an Email
          </h3>
          <form className="max-w-sm mx-auto bg-white p-4  rounded-lg shadow-lg">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Call Icon */}
        <div className="flex justify-center gap-6 mb-8 animate__animated animate__fadeIn animate__delay-3s">
          <a
            href="tel:+1234567890"
            className="text-blue-600 hover:text-blue-800 transition-all duration-300 text-4xl"
          >
            <i className="fas fa-phone-alt"></i>
          </a>
        </div>

        {/* Social Media Links */}
        <div className="text-lg text-gray-600 mt-10 animate__animated animate__fadeIn animate__delay-4s">
          <p>Or connect with us via social media:</p>
          <div className="mt-4 flex justify-center gap-6">
            <a
              href="https://facebook.com"
              className="text-blue-600 hover:text-blue-800 transition-all duration-300 text-2xl"
            >
              <FacebookF size={30} />
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-400 hover:text-blue-600 transition-all duration-300 text-2xl"
            >
              <Twitter size={30} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-700 hover:text-blue-900 transition-all duration-300 text-2xl"
            >
              <Linkedin size={30} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center  shadow-xl">
        <p className="text-sm">
          &copy; 2025 Portfolio Page. All Rights Reserved.
        </p>
        <p className="text-xs text-gray-300 mt-2">Made with ❤️ by Toewaioo</p>
      </footer>
    </div>
  );
};

export default PublicPage;
