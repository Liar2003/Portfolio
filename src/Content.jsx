import vite from "./assets/images/Skills/vite.svg";
import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
//framework png
import vitest from "./assets/images/services/vitest.png";
import angular from "./assets/images/services/anugular.png";
import react from "./assets/images/services/react.svg";
import vuejs from "./assets/images/services/vuejs.png";
import solidjs from "./assets/images/services/solidjs.png";
import astro from "./assets/images/services/astro.png";
import nuxt from "./assets/images/services/nuxt.png";
import preactjs from "./assets/images/services/preactjs.png";
import remix from "./assets/images/services/remix.png";
import svelte from "./assets/images/services/svelte.png";
import qwik from "./assets/images/services/qwik.png";
import laravel from "./assets/images/services/laravel.png";
import marko from "./assets/images/services/marko.png";
import storyjs from "./assets/images/services/storyjs.png";
import emberjs from "./assets/images/services/emberjs.png";
import { Instagram, Telegram } from "@styled-icons/fa-brands";

import { User } from "@styled-icons/fa-solid";
import { Contacts, Home5, Mail, Projector, Service } from "@styled-icons/remix-fill";

export const content = {
  nav: [
    {
      link: "#home",
      icon: Home5,
    },
    {
      link: "#skills",
      icon: User,
    },
    {
      link: "#services",
      icon: Service,
    },
    {
      link: "#projects",
      icon: Projector,
    },
    {
      link: "#contact",
      icon: Contacts,
    },
  ],
  frameworks: {
    title: "FrameWork",
    subtitle: "",
    indexList: [
      {
        12: react,
      },
      {
        13: vitest,
      },
      {
        14: angular,
      },
      {
        15: vuejs,
      },
    ],
    indexList2: [
      {
        11: solidjs,
      },
      {
        12: astro,
      },
      {
        13: nuxt,
      },
      {
        14: preactjs,
      },
      {
        15: remix,
      },
      {
        16: svelte,
      },
    ],
    indexList3: [
      {
        11: qwik,
      },
      {
        12: laravel,
      },
      {
        13: marko,
      },
      {
        14: storyjs,
      },
      {
        15: emberjs,
      },
    ],
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    content: [
      {
        title: "Web Development",
        description:
          "Professional and modern web development services to build responsive and user-friendly websites.",
        image: "https://i.postimg.cc/N9wYNLKY/IMG-20250107-165442-324.jpg",
      },
      {
        title: "WordPress Development",
        description:
          "Custom WordPress themes, plugins, and websites tailored to your needs.",
        image: "https://i.postimg.cc/TpkdRR4q/IMG-20250107-165521-096.jpg",
      },
      {
        title: "Web Application Pentesting",
        description:
          "Ensure your web application is secure with our professional penetration testing services.",
        image: "https://i.postimg.cc/ZWCTnGkk/IMG-20250107-165518-896.jpg",
      },
      {
        title: "Cloud Services Deployment",
        description:
          "Seamless deployment and management of cloud services to scale your business.",
        image: "https://i.postimg.cc/0zF9wVxz/IMG-20250107-165514-015.jpg",
      },
      {
        title: "Hosting & Domain Services",
        description:
          "Reliable hosting and domain services to keep your website online and accessible.",
        image: "https://i.postimg.cc/WDZT60bX/IMG-20250107-165516-424.jpg",
      },
    ],
  },
  skills: {
    title: "",
    subtitle: "",
    content: [
      {
        name: "Vite",
        logo: vite,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Sketch",
        logo: sketch,
      },
      {
        name: "Phpto Shop",
        logo: ps,
      },
      {
        name: "React Js",
        logo: reactjs,
      },
      {
        name: "Node Js",
        logo: nodejs,
      },
      {
        name: "Python",
        logo: python,
      },
    ],
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "kotoe.htd258@gmail.com",
        icon: Mail,
        link: "mailto:kotoe.htd258@gmail.com",
      },
      {
        text: "Telegram",
        icon: Telegram,
        link: "https://t.me/twowt2",
      },
      {
        text: "Toewaioo",
        icon: Instagram,
        link: "https://www.instagram.com/toewaioo2003/",
      },
    ],
  },
};
