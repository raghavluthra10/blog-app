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
    <div className=" dark:bg-indigo-800 bg-sky-200 dark:text-indigo-200 text-zinc-900 p-4 rounded-lg flex flex-col cursor-pointer dark:border-transparent border border-zinc-900">
      <img src={thumbnailImage} alt="" className="object-fill rounded-lg " />
      <h1 className="text-2xl mt-4 p-2">{blogTitle}</h1>

      <div className="flex mt-4 border rounded-lg dark:border-zinc-200 border-zinc-900">
        <button
          onClick={likeBlog}
          className="hover:bg-zinc-200 rounded-lg w-full grid p-2"
        >
          <Heart className="place-self-center " />
        </button>
        <button
          onClick={commentOnBlog}
          className="hover:bg-zinc-200 rounded-lg w-full grid p-2"
        >
          <MessageSquare className="place-self-center" />
        </button>
      </div>
    </div>
  );
}
