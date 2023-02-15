import User from "@/models/userModel";
import Blog from "@/models/blogModel";
import axios from "axios";

const queries = {
  async user(parent, args, _context) {
    const { _id } = args;
    console.log("_id =>", _id);
    const user = await User.findById(_id);

    return user;
  },
  async blogs(_parents, _args, _context) {
    const blogs = await Blog.find();
    return blogs;
  },
  async usersBlogs(parent, args) {
    const { _id } = args;
    const usersAllBlogs = await Blog.find({
      userId: _id,
    });

    return usersAllBlogs;
  },
  async usersBlog(parent, args) {
    const { _id } = args;
    const blogId = 1;
    const usersDesiredBlog = await Blog.find({
      userId: _id,
      _id: blogId,
    });
    return usersDesiredBlog;
  },
  async users(parent, args, context) {
    // context.hea
    const getAllUsers = await User.find({});
    return getAllUsers;
  },
};

export default queries;
