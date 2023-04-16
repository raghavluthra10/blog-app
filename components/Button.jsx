import React from "react";

const buttonSizeEnum = {
  1: "w-24",
  2: "w-40",
  3: "w-full",
};

function Button({ children, onClick, size, border, type }) {
  const buttonSize = size ? buttonSizeEnum[size] : buttonSizeEnum[2];
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={`dark:bg-indigo-900 bg-sky-200  dark:text-indigo-200 text-zinc-900 ${
        border ? "border dark:border-zinc-200 border-zinc-900 border-solid" : ""
      } rounded-md p-2 
        ${buttonSize}`}
    >
      {children}
    </button>
  );
}

export default Button;
