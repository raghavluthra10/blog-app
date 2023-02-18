import React from "react";
import { signIn, signOut, getSession } from "next-auth/react";

const explore = ({ session }) => {
  console.log("explore page", session);
  return (
    <div>
      <h1>Explore</h1>
    </div>
  );
};

export default explore;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session },
  };
}
