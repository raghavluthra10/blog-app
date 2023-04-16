import { useRouter } from "next/router";
import React, { useEffect } from "react";

function UseLoggedOut() {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      router.push("/explore");
      return;
    }
  }, []);
}

export default UseLoggedOut;
