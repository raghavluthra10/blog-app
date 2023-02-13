import resolvers from "@/graphql/resolvers";
import typeDefs from "@/graphql/typeDefs";
import { createYoga, createSchema } from "graphql-yoga";

const schema = createSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

export default createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
});
