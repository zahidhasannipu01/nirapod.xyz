import React from "react";

const RedirectButton = () => {
  return (
    <div>
      <a
        href="http://localhost:3000" // Replace with the actual URL
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-amber-500 hover:bg-amber-600 duration-300 text-white px-2 py-1 rounded-lg">
          Website
        </button>
      </a>
    </div>
  );
};

export default RedirectButton;
