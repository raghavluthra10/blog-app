import { getSession, useSession } from "next-auth/react";
import React, { useEffect } from "react";

function UseDetails() {
  const sessionUser = async () => {
    const session = await getSession();
    console.log(session);
  };

  sessionUser();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      return;
    }

    // localStorage.setItem("user", JSON.stringify(session));
  }, []);
}

export default UseDetails;
