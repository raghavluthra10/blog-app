import React from "react";
import { signIn, signOut, getSession, useSession } from "next-auth/react";

const Login = () => {
  const session = async () => {
    const currentSession = await getSession();
    console.log("current session =>", currentSession);
  };

  return (
    <>
      <button onClick={session}>get session</button>
      <h1>Click here to sign in</h1>
      <br />
      <button onClick={() => signIn()}>Sign in</button>
      <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default Login;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log("getServerSession from login =>", session);

  // if (session) {
  //   return {
  //     redirect: {
  //       destination: "/explore",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: { session },
  };
}
