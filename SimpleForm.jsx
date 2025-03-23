import React, { useState } from "react";

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Value:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        placeholder="Enter text"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default SimpleForm;
