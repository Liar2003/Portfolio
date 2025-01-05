import React from "react";
import { ArrowLeft } from "@styled-icons/fa-solid"; // Import the back arrow icon
import styled from "styled-components"; // For additional styling if needed

// Styled Components for Icons
const Icon = styled(ArrowLeft)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      {/* Big 404 Text */}
      <h1 className="text-9xl font-bold text-blue-600">404</h1>

      {/* Not Found Message */}
      <p className="text-2xl mt-4 text-gray-600">Not Found</p>

      {/* Buttons */}
      <div className="mt-8 flex space-x-4">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all"
        >
          <Icon />
          Back
        </button>

        {/* Home Button */}
        <a
          href="/"
          className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
        >
          <Icon style={{ transform: "rotate(180deg)" }} />
          Home
        </a>
      </div>
    </div>
  );
}

export default NotFoundPage;
