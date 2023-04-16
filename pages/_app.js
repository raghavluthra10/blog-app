import client from "@/apollo-client";
import "@/styles/globals.css";
import { useSession } from "next-auth/react";
import { gql } from "@apollo/client";
import { SessionProvider, getSession } from "next-auth/react";
import React from "react";
import { ApolloProvider } from "@apollo/client";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  if (Component.getLayout) {
    return Component.getLayout(
      <ApolloProvider client={client}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ApolloProvider>,
    );
  } else {
    return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    );
  }
}
