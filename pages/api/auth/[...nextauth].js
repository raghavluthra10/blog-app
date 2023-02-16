import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodbAdapter";
import User from "@/models/userModel";

const THIRTY_DAYS = 30 * 24 * 60 * 60;
const THIRTY_MINUTES = 30 * 60;

export const authOptions = {
  // secret: process.env.JWT_SECRET,
  // session: {
  //   strategy: "jwt",
  //   maxAge: THIRTY_DAYS,
  //   updateAge: THIRTY_MINUTES,
  // },
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session({ session }) {
      // add the owner value as true
      session.owner = true;
      return session;
    },
  },
};

export default async function auth(req, res) {
  return await NextAuth(req, res, authOptions);
}
