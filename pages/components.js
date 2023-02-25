import Button from "@/components/Button.jsx";
import ProgressBar from "@/components/ProgressBar";
import Navbar from "@/components/Navbar";
import React from "react";
import BlogPost from "@/components/BlogPost";
import Page from "@/components/Page";

function components() {
  return (
    <Page className="flex flex-col">
      <Navbar />
      <Button
        border={true}
        onClick={() => console.log("button component")}
        size={1}
      >
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
      {/* card component for blogs view on explore and myBlogs page */}
      <BlogPost />
      {/* likes display component for when a user clicks on likes and sees who all liked it */}
      {/* add comment component */}
      {/* display comments component */}
    </Page>
  );
}

export default components;
