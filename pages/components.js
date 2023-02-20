import Button from "@/components/Button.jsx";
import ProgressBar from "@/components/ProgressBar";
import Navbar from "@/components/Navbar";
import React from "react";
import BlogPost from "@/components/BlogPost";

function components() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Button onClick={() => console.log("button component")} size={1}>
        Click
      </Button>
      <Button onClick={() => console.log("button component")} size={2}>
        Click
      </Button>
      <Button onClick={() => console.log("button component")} size={3}>
        Click
      </Button>
      <br />
      <br />
      <ProgressBar />
      <br />
      <br />
      <BlogPost />
      {/* card component for blogs view on explore and myBlogs page */}
      {/* likes display component for when a user clicks on likes and sees who all liked it */}
      {/* add comment component */}
      {/* display comments component */}
    </div>
  );
}

export default components;
