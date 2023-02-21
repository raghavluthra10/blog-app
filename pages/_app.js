import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function App({ Component, pageProps, session }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>,
    );
  } else {
    return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    );
  }
}
