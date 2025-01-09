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
import ContactMe from "./ContactMe";

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
      <Navbar />
      <Hero />

      {/* Services Section */}
      <Services />
      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactMe />

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
