import React from "react";

const Button = () => {
  return (
    <button
      onClick={() => console.log("Button clicked!")}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Click Me
    </button>
  );
};

export default Button;
