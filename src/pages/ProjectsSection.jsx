import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { content } from "../Content";
import { Github } from "@styled-icons/fa-brands";

const ProjectsSection = () => {
  const [hovered, setHovered] = useState(null);
  const { projects } = content;
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section id="projects" className="p-6 bg-slate-200 dark:bg-black">
      <h3
        data-aos="fade-down"
        className="text-2xl font-bold mb-6 dark:text-gray-100"
      >
        {projects.title}
      </h3>
      <h6 data-aos="slide-right" className="mb-10">
        {projects.subtitle}
      </h6>

      {/* Mobile Slider */}
      <div
        data-aos="fade-down"
        className="lg:hidden rounded-3xl drop-shadow-primary self-start bg-slate-300 dark:bg-black "
      >
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          className=" p-5 "
        >
          {projects.content.map((project) => (
            <SwiperSlide key={project.id} className="">
              <div className="">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 text-gray-600 dark:text-gray-800 hover:text-gray-950 dark:hover:text-gray-950"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
                <div className="p-4 mb-5">
                  <h3 className="text-lg font-semibold dark:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-500">
                    {project.description}
                  </p>
                  <div className="flex justify-end ">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" cursor-pointer underline text-blue-600 dark:text-blue-400 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex flex-row lg:space-x-4 space-y-0">
        {projects.content.map((project, index) => (
          <div
            key={project.id}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`flex-grow ${
              index === 0
                ? hovered === null || hovered === 0
                  ? "lg:flex-[4]"
                  : "lg:flex-[1]"
                : hovered === index
                ? "lg:flex-[4]"
                : "lg:flex-[1]"
            } transition-all duration-300 bg-slate-200 dark:bg-neutral-800 shadow-lg rounded-lg overflow-hidden`}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 text-gray-600 dark:text-gray-800 hover:text-gray-950 dark:hover:text-gray-950"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold dark:text-gray-200">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-500 line-clamp-3 pt-3">
                {project.description}
              </p>
              <div className="flex justify-end pt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" cursor-pointer underline text-blue-600 dark:text-blue-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
