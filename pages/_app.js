import client from "@/apollo-client";
import "@/styles/globals.css";
import { gql } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps, session }) {
  console.log("App component renders");
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

// export async function getServerSideProps(context) {
//   const getFakeData = gql`
//     query {
//       getFakeData {
//         userId
//         id
//         thumbnail
//       }
//     }
//   `;

//   const fakeData = await client.query({
//     query: getFakeData,
//   });

//   console.log("context from _api =>", fakeData);

//   return {
//     props: { ctx: fakeData },
//   };
// }
