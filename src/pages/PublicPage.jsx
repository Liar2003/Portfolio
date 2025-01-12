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

import Services from "./Services";
import SkillsSection from "./SkillsSection";
import ContactMe from "./ContactMe";
import Navbar from "../layout/Navbar";
import ProjectsSection from "./ProjectsSection";
import Testimonials from "./Testimonials";

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
      {/* //Projects Section */}
      <ProjectsSection />
      {/* Feedbacks */}
      <Testimonials />
      {/* Contact Section */}
      <ContactMe />

      {/* Footer */}
      <footer className="dark:bg-black dark:text-white bg-slate-300 text-black py-6 text-center  shadow-xl">
        <p className="text-sm">
          &copy; 2025 Portfolio Page. All Rights Reserved.
        </p>
        <p className="text-xs text-gray-950 mt-2 dark:text-gray-350 dark:text-gray-500">
          Made with ❤️ by Toewaioo
        </p>
      </footer>
    </div>
  );
};

export default PublicPage;
