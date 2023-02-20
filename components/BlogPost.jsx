import React from "react";
import Image from "next/image";
import { Heart, MessageSquare } from "react-feather";

export default function BlogPost({ thumbnail, title }) {
  const thumbnailImage = thumbnail ? thumbnail : "/gun.png";
  const blogTitle = title ? title : "This is a random temprary title";

  const likeBlog = () => {
    console.log("likeBlog");
  };

  const commentOnBlog = () => {
    console.log("commentOnBlog");
  };

  return (
    <div className="dark:bg-slate-900 bg-slate-200 dark:text-slate-200 text-slate-900 p-4 border rounded-lg flex flex-col cursor-pointer ">
      <img src={thumbnailImage} alt="" className="object-fill rounded-lg " />
      <h1 className="text-2xl mt-4 p-2">{blogTitle}</h1>

      <div className="flex mt-4 border rounded-lg dark:border-slate-200">
        <button
          onClick={likeBlog}
          className="hover:bg-gray-200 rounded-lg w-full grid p-2"
        >
          <Heart className="place-self-center " />
        </button>
        <button
          onClick={commentOnBlog}
          className="hover:bg-gray-200 rounded-lg w-full grid p-2"
        >
          <MessageSquare className="place-self-center" />
        </button>
      </div>
    </div>
  );
}
