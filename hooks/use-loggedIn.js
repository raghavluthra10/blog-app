import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function UseLoggedIn() {
  const router = useRouter();

  React.useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/login");
      return;
    }
  }, []);
}

export default UseLoggedIn;
