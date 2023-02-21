import React from "react";
import { signIn, signOut, getSession } from "next-auth/react";
import Page from "@/components/Page";
import UserLogged from "@/layouts/UserLogged";

const Explore = ({ session }) => {
  console.log("explore page", session);
  return (
    <Page>
      <h1>Explore</h1>
    </Page>
  );
};

export default Explore;

Explore.getLayout = UserLogged;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session },
  };
}
