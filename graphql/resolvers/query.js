import User from "@/models/userModel";
import Blog from "@/models/blogModel";
import axios from "axios";
import { GraphQLError } from "graphql";
import validateUser from "@/utils/validateUser";

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
  async usersAllBlogs(parent, args) {
    const { userId } = args;
    const usersAllBlogs = await Blog.find({
      userId: userId,
    });

    return usersAllBlogs;
  },
  async usersSingleBlog(parent, args, context) {
    validateUser(context);
    const { _id } = args;
    const blogId = 1;
    const usersDesiredBlog = await Blog.find({
      userId: _id,
      _id: blogId,
    });
    return usersDesiredBlog;
  },
  async users(parent, args, context) {
    validateUser(context);

    const getAllUsers = await User.find({});
    return getAllUsers;
  },
  async getAllComments(parent, args, context) {
    validateUser(context);
    const { blogId } = args;

    const allblogs = await Blog.find({ _id: blogId });
    const extractCommentsFromBlogs = allblogs.reduce((accumulator, blog) => {
      return accumulator.concat(blog.comments);
    }, []);

    return extractCommentsFromBlogs;
  },
  async blogLikes(parents, args, context) {
    try {
      validateUser(context);

      const { blogId } = args;

      const blog = await Blog.findById(blogId);

      const extractLikesFromBlog = blog.likes;

      return extractLikesFromBlog;
    } catch (error) {
      console.log(error);
      throw new GraphQLError(error.message);
    }
  },
};

export default queries;
