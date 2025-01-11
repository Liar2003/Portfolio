import { createElement, useRef } from "react";
import { content } from "../Content";

const ContactMe = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //     'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         // Clear all input field values
  //         form.current.reset();
  //         // Success toast message
  //         toast.success("Email send Successfully");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         toast.error(error.text);
  //       }
  //     );
  // };

  return (
    <section 
      className="bg-slate-200 dark:bg-black lg:px-20 text-gray-500"
      id="contact"
    >
      <div className="md:container px-5 py-14">
        <h2 className="title text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              className="py-2 px-9 border-2 rounded-md border-gray-500 rounded-br-3xl font-medium"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <a className="w-10 h-10">{createElement(content.icon)}</a>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
// import React from "react";
// import {
//   TelegramPlane,
//   FacebookF,
//   Twitter,
//   Instagram,
//   Linkedin,
// } from "@styled-icons/fa-brands";

// const ContactMe = () => {
//   return (
//     <section className="bg-gray-100 p-5 dark:bg-black dark:text-white">
//       <h2 className="text-3xl font-bold text-center m-10">Contact Me</h2>
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
//           {/* Left: Photo */}
//           <div className="flex flex-col justify-center max-[620px]:hidden">
//             <img
//               src="https://iili.io/2rFWXIV.png"
//               alt="Your Name"
//               className=""
//             />
//             <p className="text-lg text-center text-gray-700  animate__animated animate__fadeIn animate__delay-1s dark:text-gray-500">
//               Have any questions or need support?,<br></br> We're here to help!{" "}
//               <br></br>Reach out to us anytime.
//             </p>
//           </div>

//           {/* Right: Contact Form */}
//           <div className="bg-white shadow-md rounded-lg p-8 dark:bg-neutral-950">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-6 dark:text-gray-400">
//               Send Me an email
//             </h2>
//             <form>
//               <div className="mb-4">
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-500 mb-2 dark:text-white"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-950"
//                   placeholder="Your name"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-600 mb-2 dark:text-white"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-950"
//                   placeholder="Your email"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-600 mb-2 dark:text-white"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="4"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-950"
//                   placeholder="Your message"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 dark:text-white"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//         </div>
//         <div className="text-lg text-gray-600 mt-10 animate__animated animate__fadeIn animate__delay-4s">
//             <p className="text-center">Or connect with us via social media:</p>
//             <div className="mt-4 flex justify-center gap-6">
//               <a
//                 href="https://facebook.com"
//                 className="text-blue-600 hover:text-blue-800 transition-all duration-300 text-2xl"
//               >
//                 <FacebookF size={30} />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 className="text-blue-400 hover:text-blue-600 transition-all duration-300 text-2xl"
//               >
//                 <Twitter size={30} />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 className="text-blue-700 hover:text-blue-900 transition-all duration-300 text-2xl"
//               >
//                 <Linkedin size={30} />
//               </a>
//             </div>
//           </div>
//       </div>
//     </section>
//   );
// };

// export default ContactMe;
