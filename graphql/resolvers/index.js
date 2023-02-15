import User from "@/models/userModel";
import Blog from "@/models/blogModel";
import mutations from "./mutation";
import queries from "./query";

const resolvers = {
  Query: queries,
  Mutation: mutations,
};

export default resolvers;
