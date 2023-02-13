// make a seperate file for resolvers and export it from this file

import User from "@/models/userModel";
import Blog from "@/models/blogModel";
import connectMongodb from "@/lib/mongodb";

const resolvers = {
  Query: {
    async user(parent, args) {
      const { _id } = args;
      console.log("_id =>", _id);
      const user = await User.findById(_id);

      return user;
    },
    async blogs() {
      await connectMongodb();
      const blogs = await Blog.find();
      return blogs;
    },
  },
  Mutation: {},
};

export default resolvers;
