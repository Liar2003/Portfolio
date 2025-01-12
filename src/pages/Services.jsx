import React from "react";
import { content } from "../Content";

const { skills, services } = content;
const scrollingImages = skills.content;
const service = services.content;

const Services = () => {
  const handleMouseEnter = (event) => {
    const siblings = Array.from(
      event.currentTarget.parentElement.children
    ).filter((el) => el !== event.currentTarget);
    siblings.forEach((el) => el.classList.add("blur-sm"));
  };

  const handleMouseLeave = (event) => {
    const siblings = Array.from(
      event.currentTarget.parentElement.children
    ).filter((el) => el !== event.currentTarget);
    siblings.forEach((el) => el.classList.remove("blur-sm"));
  };
  return (
    <section
      jsx={"true"}
      id="services"
      className="bg-gray-100 py-12 px-4 sm:px-8 lg:px-16 dark:bg-black dark:text-white"
    >
      <h2
        data-aos="fade-down"
        className="text-3xl font-bold lg:px-20  dark:text-white"
      >
        {services.title}
      </h2>
      <h4
        className="subtitle lg:px-20 mb-5 text-gray-500 dark:text-indigo-400"
        data-aos="fade-down"
      >
        {services.subtitle}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 lg:px-20">
        {service.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 dark:bg-neutral-900 dark:text-white service-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Learn More</p>
              </div>
            </div>
            <div className="p-6">
              <h6 className="text-xl text-center font-semibold mb-2 text-gray-800 dark:text-white">
                {service.title}
              </h6>
              <p className="text-gray-600 text-center dark:text-gray-50">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scrolling Images Section */}
      
    </section>
  );
};

export default Services;
