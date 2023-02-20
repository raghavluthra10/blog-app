import React from "react";
import Image from "next/image";
import { Heart, MessageSquare } from "react-feather";

export default function BlogPost({ thumbnail, title, author, postedOn }) {
  const thumbnailImage = thumbnail ? thumbnail : "/gun.png";
  const blogTitle = title ? title : "This is a random temprary title";

  const likeBlog = () => {
    console.log("likeBlog");
  };

  const commentOnBlog = () => {
    console.log("commentOnBlog");
  };

  return (
    <div className="max-w-2xl min-w-56 dark:bg-indigo-800 bg-sky-200 dark:text-indigo-200 text-zinc-900 p-4 rounded-lg flex flex-col cursor-pointer dark:border-transparent border border-zinc-900">
      <div className="flex justify-between mb-2 text-md mobile:text-2xl">
        <section>{author ? author : "Raghav Luthra"}</section>
        <section>{postedOn ? postedOn : "22-2-2020"}</section>
      </div>
      <div className="w-full ">
        <img
          src={thumbnailImage}
          alt=""
          className="object-cover w-full rounded-lg"
        />
      </div>
      <h1 className="text-md mobile:text-2xl mt-4 p-2">{blogTitle}</h1>

      <div className="flex mt-4 border rounded-lg dark:border-zinc-200 border-zinc-900">
        <button
          onClick={likeBlog}
          className="hover:bg-indigo-600 rounded-lg w-full grid p-2"
        >
          <Heart className="place-self-center " />
        </button>
        <button
          onClick={commentOnBlog}
          className="hover:bg-indigo-600 rounded-lg w-full grid p-2"
        >
          <MessageSquare className="place-self-center" />
        </button>
      </div>
    </div>
  );
}
