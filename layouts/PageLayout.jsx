import Navbar from "@/components/Navbar";
import React from "react";

function UserLogged(page) {
  return (
    <React.Fragment>
      <Navbar />
      {page}
    </React.Fragment>
  );
}

export default UserLogged;
