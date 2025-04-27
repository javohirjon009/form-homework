import React from "react";

const Card = ({ image, title, buttonType = "primary" }) => {

  const buttonStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    default: "bg-gray-300 text-black hover:bg-gray-400",
  };

  
  const currentStyle = buttonStyles[buttonType] || buttonStyles.default;

  return (
    <div className="border p-4 rounded-lg w-64 h-auto m-2">
      <img src={image} alt="404" className="mb-2 rounded-md" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <button className={`mt-2 px-4 py-1 rounded ${currentStyle}`}>
        Click
      </button>
    </div>
  );
};

export default Card; 
