import React from "react";

const UserCard = ({ name, email }) => {
  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white w-80 text-center">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

export default UserCard;
