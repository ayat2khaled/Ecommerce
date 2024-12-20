import React from "react";

function Alert({ title, description, image, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-5 border border-gray-300 rounded-lg text-center shadow-lg">
        <h2 style={{ color: "green", marginBottom: "10px" }}>{title}</h2>
        <p style={{ textTransform: "lowercase", marginBottom: "20px" }}>
          {description}
        </p>
        <img
          src={image}
          alt={title}
          style={{ maxWidth: "100px", marginBottom: "20px" }}
        />
        <button
          onClick={onClose}
          className="p-2 bg-blue-500 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Alert;