import resolvers from "@/graphql/resolvers";
import typeDefs from "@/graphql/typeDefs";
import connectMongodb from "@/lib/mongodb";
import { createYoga, createSchema } from "graphql-yoga";

const schema = createSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

export default createYoga({
  schema,
  context: {
    db: connectMongodb(),
  },
  graphqlEndpoint: "/api/graphql",
});
