import resolvers from "@/graphql/resolvers";
import typeDefs from "@/graphql/typeDefs";
import connectMongodb from "@/lib/mongodb";
import { createYoga, createSchema } from "graphql-yoga";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

const schema = createSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

connectMongodb();

export default createYoga({
  schema,
  context: async ({ req, res }) => {
    const session = await getServerSession(req, res, authOptions);
    return { session };
  },
  graphqlEndpoint: "/api/graphql",
});
