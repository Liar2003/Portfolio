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
import { Hero } from "./Hero";
import Navbar from "../components/NavBar";
import Services from "./Services";
import SkillsSection from "./SkillsSection";

const PublicPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />
      {/* Skills Section */}
      <SkillsSection />

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
