import React from "react";

function Avatar({ src, className: extraClass }) {
  return (
    <img
      className={`${extraClass && extraClass} w-14 rounded-full`}
      src={src}
      alt="Avatar"
    />
  );
}

export default Avatar;
