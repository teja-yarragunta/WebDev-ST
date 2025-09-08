import React, { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* toggle button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 px-3 py-1 rounded-lg text-sm font-medium bg-gray-300 text-gray-900 hover:bg-gray-400 transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      {/* product card */}
      <div
        className={`max-w-xs rounded-2xl shadow-md flex flex-col items-center transition-colors duration-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <img
          src="image.png"
          alt="Sneaker"
          className="w-56 h-56 object-contain mt-4"
        />
        <div className="p-4 w-full">
          <h5 className="text-sm font-medium mb-2 text-center">
            Nike Men's Casual Sneaker Shoes
          </h5>

          <div className="flex items-center justify-center space-x-2 mb-3">
            <span className="text-yellow-400">★★★★★</span>
            <span
              className={`text-xs px-1 rounded ${
                darkMode
                  ? "bg-gray-700 text-gray-200"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              4.8
            </span>
          </div>

          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold">₹4,676</h1>
            <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
