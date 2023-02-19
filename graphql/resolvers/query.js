import User from "@/models/userModel";
import Blog from "@/models/blogModel";
import axios from "axios";
import { GraphQLError } from "graphql";
import validateUser from "@/utils/validateUser";

const queries = {
  async user(parent, args, context) {
    try {
      const { _id } = args;
      console.log("_id =>", _id);
      const user = await User.findById(_id);

      return user;
    } catch (error) {
      console.log(error);
      throw new GraphQLError(error.message);
    }
  },
  async blogs(parents, args, context) {
    try {
      validateUser(context);

      const blogs = await Blog.find();
      return blogs;
    } catch (error) {
      console.log(error);
      throw new GraphQLError(error.message);
    }
  },
  async usersAllBlogs(parent, args, context) {
    try {
      validateUser(context);
      const { userId } = args;
      const usersAllBlogs = await Blog.find({
        userId: userId,
      });

      return usersAllBlogs;
    } catch (error) {
      console.log(error);
      throw new GraphQLError(error.message);
    }
  },
  async usersSingleBlog(parent, args, context) {
    try {
      validateUser(context);
      const { _id } = args;
      const blogId = 1;
      const usersDesiredBlog = await Blog.find({
        userId: _id,
        _id: blogId,
      });
      return usersDesiredBlog;
    } catch (error) {
      console.log(error);
      throw new GraphQLError(error.message);
    }
  },
  async users(parent, args, context) {
    try {
      validateUser(context);
      const getAllUsers = await User.find({});
      return getAllUsers;
    } catch (error) {
      console.log(error);
      throw new GraphQLError(error.message);
    }
  },
  async getAllComments(parent, args, context) {
    try {
      validateUser(context);

      const { blogId } = args;

      const allblogs = await Blog.find({ _id: blogId });
      const extractCommentsFromBlogs = allblogs.reduce((accumulator, blog) => {
        return accumulator.concat(blog.comments);
      }, []);

      return extractCommentsFromBlogs;
    } catch (error) {
      console.log(error);
      throw new GraphQLError(error.message);
    }
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
