import React from "react";

const buttonSizeEnum = {
  1: "w-24",
  2: "w-40",
  3: "w-full",
};

function Button({ children, onClick, size }) {
  const buttonSize = size ? buttonSizeEnum[size] : buttonSizeEnum[2];
  return (
    <button
      onClick={onClick}
      className={`dark:bg-gray-900 bg-gray-200 border dark:text-gray-200 text-gray-900 dark:border-slate-200 border-slate-900 border-solid rounded-md p-2 
        ${buttonSize}`}
    >
      {children}
    </button>
  );
}

export default Button;
