import React, { useEffect, useRef, useState } from "react";

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
  const indexList = [
    {
      12: "https://iili.io/2r36zXe.th.png",
    },
    {
      13: "https://react.dev/images/brand/logo_light.svg",
    },
    {
      14: "https://iili.io/2r38HzJ.md.png",
    },
    {
      15: "https://iili.io/2r3gdsj.png",
    },
  ];
  const indexList2 = [
    {
      11: "https://iili.io/2r3pazx.png",
    },
    {
      12: "https://iili.io/2rFHazG.png",
    },
    {
      13: "https://iili.io/2rFJdQf.png",
    },
    {
      14: "https://iili.io/2rFJm6Q.png",
    },
    {
      15: "https://iili.io/2rF2kBf.png",
    },
    {
      16: "https://nuxt.com/assets/design-kit/icon-green.png",
    },
  ];
  const indexList3 = [
    {
      11: "https://iili.io/2rFfyKJ.png",
    },
    {
      12: "https://iili.io/2rFBaII.png",
    },
    {
      13: "https://iili.io/2rFCO9R.md.png",
    },
    {
      14: "https://iili.io/2rFod1n.png",
    },
    {
      15: "https://iili.io/2rFxBaa.png",
    },
  ];

  return (
    <section className="lg:pl-32 lg:pr-20 pb-10 bg-black">
      <div className=" relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r  from-black via-transparent to-black z-10 pointer-events-none "></div>

        {/* Main content */}
        <div className="flex items-center justify-center flex-col space-y-6">
          <h2 className="font-bold text-white text-center text-5xl tracking-tighter relative break-words line-clamp-2 m-5 ">
            Powering your favorite <br></br>frameworks and tools
          </h2>

          {/* Flex container for squares */}
          <div className=" flex  gap-6">
            {squares.map((_, index) => (
              <div
                key={index}
                className="w-20 h-20 border-solid border-1 border-gray-500 flex items-center justify-center bg-gray-800 rounded-lg transform transition-transform duration-200 hover:scale-110"
              ></div>
            ))}
          </div>
          <div className="ml-24 flex  gap-6">
            {squares.map((_, index) => (
              <ImageSquares
                key={index}
                index={index}
                indexs={indexList}
                // Loop if fewer URLs
              ></ImageSquares>
            ))}
          </div>
          <div className="ml-36 flex  gap-6">
            {squares.map((_, index) => (
              <ImageSquares
                key={index}
                index={index}
                indexs={indexList2}
                // Loop if fewer URLs
              ></ImageSquares>
            ))}
          </div>
          <div className="ml-56 flex  gap-6">
            {squares.map((_, index) => (
              <ImageSquares
                key={index}
                index={index}
                indexs={indexList3}
                // Loop if fewer URLs
              ></ImageSquares>
            ))}
          </div>
          <div className=" flex  gap-6">
            {squares.map((_, index) => (
              <div
                key={index}
                className="w-20 h-20 border-solid border-1 border-gray-500 flex items-center justify-center bg-gray-800 rounded-lg transform transition-transform duration-200 hover:scale-110"
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
    <div className="w-20 h-20 border-solid border-1 border-gray-500 flex items-center justify-center bg-gray-800 rounded-lg transform transition-transform duration-200 hover:scale-110"></div>
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
      className={`w-20 h-20 p-3 bg-slate-800  rounded-lg shadow-lg hover:scale-100 duration-200 hover:shadow-[0_0_20px_15px_#7dd3fc] transform transition-transform `}
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
