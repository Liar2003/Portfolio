import React from "react";
import {
  TelegramPlane,
  FacebookF,
  Twitter,
  Instagram,
  Linkedin,
} from "@styled-icons/fa-brands";

const ContactMe = () => {
  return (
    <section className="bg-gray-100 p-5 dark:bg-black dark:text-white">
      <h2 className="text-3xl font-bold text-center m-10">Contact Me</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          {/* Left: Photo */}
          <div className="flex flex-col justify-center max-[620px]:hidden">
            <img
              src="https://iili.io/2rFWXIV.png"
              alt="Your Name"
              className=""
            />
            <p className="text-lg text-center text-gray-700  animate__animated animate__fadeIn animate__delay-1s dark:text-gray-500">
              Have any questions or need support?,<br></br> We're here to help!{" "}
              <br></br>Reach out to us anytime.
            </p>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8 dark:bg-neutral-950">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 dark:text-gray-400">
              Send Me an email
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-500 mb-2 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-950"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-2 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-950"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600 mb-2 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-950"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 dark:text-white"
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
        <div className="text-lg text-gray-600 mt-10 animate__animated animate__fadeIn animate__delay-4s">
            <p className="text-center">Or connect with us via social media:</p>
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
      </div>
    </section>
  );
};

export default ContactMe;
