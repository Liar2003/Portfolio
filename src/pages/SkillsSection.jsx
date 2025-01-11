import React, { useEffect, useRef, useState } from "react";
import { content } from "../Content";

const SkillsSection = () => {
  const rows = 5;
  const columns = 10;

  // Create an array with 10 items to represent the squares
  const squares = Array.from({ length: 30 });
  const imageUrls = [
    // Add your image URLs here
    "https://vite.dev/assets/react.Dn3lPOaa.svg",
    ,
  ];
  const { frameworks } = content;

  return (
    <section
      id="skills"
      className="lg:pl-32 lg:pr-20 pb-10 bg-slate-100 dark:bg-black"
    >
      <div className=" relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-transparent to-slate-100  dark:from-black dark:via-transparent dark:to-black z-10 pointer-events-none "></div>
        {/* Main content */}
        <h4
          data-aos="fade-down"
          className="lg:font-bold text-grey-950 dark:text-slate-200 text-center text-3xl lg:text-5xl tracking-tighter relative break-words line-clamp-2 m-5 "
        >
          Powering your favorite <br></br>frameworks and tools
        </h4>

        <div
          className="flex items-center justify-center flex-col space-y-6"
          data-aos="zoom-in"
        >
          {/* Flex container for squares */}
          <div className=" flex  lg:gap-6 gap-3 ">
            {squares.map((_, index) => (
              <div
                key={index}
                className=" lg:w-20 lg:h-20 w-16 h-16 border-solid border-[1px] dark:border-gray-500 flex items-center justify-center bg-gray-300 dark:bg-gray-950 rounded-lg transform transition-transform duration-200 hover:scale-110"
              ></div>
            ))}
          </div>
          <div className="ml-24 flex lg:gap-6 gap-3">
            {squares.map((_, index) => (
              <ImageSquares
                key={index}
                index={index}
                indexs={frameworks.indexList}
                // Loop if fewer URLs
              ></ImageSquares>
            ))}
          </div>
          <div className="ml-36 flex  lg:gap-6 gap-3">
            {squares.map((_, index) => (
              <ImageSquares
                key={index}
                index={index}
                indexs={frameworks.indexList2}
                // Loop if fewer URLs
              ></ImageSquares>
            ))}
          </div>
          <div className="ml-56 flex  lg:gap-6 gap-3">
            {squares.map((_, index) => (
              <ImageSquares
                key={index}
                index={index}
                indexs={frameworks.indexList3}
                // Loop if fewer URLs
              ></ImageSquares>
            ))}
          </div>
          <div className=" flex  lg:gap-6 gap-3">
            {squares.map((_, index) => (
              <div
                key={index}
                className="lg:w-20 lg:h-20 w-16 h-16 border-solid border-[1px] dark:border-gray-500 flex items-center justify-center  bg-gray-300 dark:bg-gray-950 rounded-lg transform transition-transform duration-200 hover:scale-110"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
const ImageSquares = ({ index, indexs }) => {
  // Find the object in the indexs array with the matching index
  const match = indexs.find((item) => Object.keys(item)[0] == index);

  if (match) {
    const imageUrl = match[index];
    return <ImageSquare imageUrl={imageUrl} />;
  }

  // Render this div if index is not included
  return (
    <div className="lg:w-20 lg:h-20 w-16 border-solid border-[1px] dark:border-gray-500 flex items-center justify-center  bg-gray-300 dark:bg-gray-950 rounded-lg transform transition-transform duration-200 hover:scale-110"></div>
  );
};

const ImageSquare = ({ imageUrl }) => {
  const [shadowColor, setShadowColor] = useState("#000000"); // Default shadow
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Once the image is loaded, extract the dominant color
    img.onload = () => {
      const color = getDominantColor(img);
      if (color) {
        setShadowColor(color);
      }
    };
  }, [imageUrl]);

  // Function to extract the dominant color using Canvas
  const getDominantColor = (image) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return null;

    // Set canvas dimensions to image dimensions
    canvas.width = image.width;
    canvas.height = image.height;

    // Draw the image onto the canvas
    ctx.drawImage(image, 0, 0, image.width, image.height);

    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let r = 0,
      g = 0,
      b = 0,
      count = 0;

    // Iterate over pixels and sum up colors
    for (let i = 0; i < data.length; i += 4) {
      // Skip transparent pixels
      if (data[i + 3] < 255) continue;

      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }

    // Calculate average color
    if (count === 0) return "#000000";

    r = Math.round(r / count);
    g = Math.round(g / count);
    b = Math.round(b / count);
    console.log(r + ":" + b + ":" + g);

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div
      className={`border-solid border-[1px] dark:border-gray-500 lg:w-20 lg:h-20 w-16 h-16 p-3  bg-gray-400 dark:bg-slate-950  rounded-lg shadow-lg hover:scale-100 duration-200 hover:shadow-[0_0_20px_15px_#7dd3fc] transform transition-transform `}
      style={{
        boxShadow: "none", // Default shadow is none
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 15px 5px ${shadowColor}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none"; // Remove shadow on hover exit
      }}
    >
      {/* Image inside the div */}
      <img
        ref={imgRef}
        src={imageUrl}
        className="w-full h-full object-cover rounded-lg"
        crossOrigin="anonymous" // Needed for CORS
      />

      {/* Overlay for hover shadow */}
    </div>
  );
};

export default SkillsSection;
