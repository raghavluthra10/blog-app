import React, { useEffect, useState } from "react";
import { signIn, signOut, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Page from "@/components/Page";
import Button from "@/components/Button";
import UseLoggedOut from "@/hooks/use-loggedOut";

const Login = () => {
  // UseLoggedOut();
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleUserDetails = async () => {
    const session = await getSession();

    if (session) {
      localStorage.setItem("user", JSON.stringify(session));
      router.push("/explore");
    }

    console.log("handleUserSession =>", session);
  };

  useEffect(() => {
    // handleUserDetails();
  }, []);

  const getSessionFunction = async () => {
    const currentSession = localStorage.getItem("user");

    console.log(currentSession);
    // console.log(currentSession);
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();

    await signIn("google", {
      callbackUrl: "/explore",
      // redirect: false,
    });
  };

  return (
    <Page>
      <Button onClick={() => localStorage.removeItem("user")}>
        Remove session from localStorage
      </Button>
      <Button onClick={getSessionFunction}>get session</Button>
      <h1>Click here to sign in</h1>
      <br />

      <Button onClick={signInWithGoogle}>Sign in</Button>

      <br />
      <Button onClick={() => signOut({ redirect: false })}>Sign out</Button>
    </Page>
  );
};

export default Login;
