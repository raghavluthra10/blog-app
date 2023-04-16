import User from "@/models/userModel";
import Blog from "@/models/blogModel";
import { GraphQLError } from "graphql";
import validateUser from "@/utils/validateUser";

const mutations = {
  async addBlog(parent, args, context) {
    try {
      validateUser(context);

      const { input } = args;

      let blogToBeAdded = { deltaOne: input.deltaOne, userId: input.userId };

      if (input.deltaTwo) {
        blogToBeAdded.deltaTwo = input.deltaTwo;
      }

      const addBlog = await Blog.create(blogToBeAdded);

      return addBlog;
    } catch (error) {
      console.log(error);
      throw new GraphQLError(error.message);
    }
  },
  async updateBlog(parent, args, context) {
    try {
      validateUser(context);

      const { input } = args;

      let blogToBeUpdated = { deltaOne: input.deltaOne };

      if (input.deltaTwo) {
        blogToBeUpdated.deltaTwo = input.deltaTwo;
      }

      const updatedBlog = await Blog.findOneAndUpdate(
        {
          _id: input.blogId,
        },
        blogToBeUpdated,
      );

      return updatedBlog;
    } catch (error) {
      console.log(error);
      throw new GraphQLError(error.message);
    }
  },
  async deleteBlog(parent, args, context) {
    try {
      validateUser(context);

      const { blogId } = args;

      const blogToBeDeleted = await Blog.findOneAndDelete({
        _id: blogId,
      });

      return blogToBeDeleted;
    } catch (error) {
      console.log(error);
      throw new GraphQLError(error.message);
    }
  },
  async addComment(parent, args, context) {
    try {
      validateUser(context);
      const { comment, userId, blogId } = args;

      const addCommentToBlog = {
        comment,
        userId,
      };

      const updateComment = await Blog.findOneAndUpdate(
        { _id: blogId },
        {
          $push: { comments: addCommentToBlog },
        },
        { new: true },
      );

      return updateComment;
    } catch (error) {
      console.log(error);
      throw new GraphQLError(error.message);
    }
  },
  async deleteComment(parent, args, context) {
    try {
      validateUser(context);

      const { blogId, commentId } = args;

      const comment = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: {
            comments: { _id: commentId },
          },
        },
        {
          new: true,
        },
      );

      return comment;
    } catch (error) {
      console.log(error);
      throw new GraphQLError(error.message);
    }
  },
  async likeBlog(parent, args, context) {
    try {
      validateUser(context);

      const { blogId, userId } = args;

      const { session } = await context;

      const { user } = session;

      const likeToBeAdded = {
        userId: userId,
        name: user.name,
        email: user.email,
      };

      const like = await Blog.findOneAndUpdate(
        { _id: blogId },
        { $push: { likes: likeToBeAdded } },
        { new: true },
      );

      return like;
    } catch (error) {
      console.log(error);
      throw new GraphQLError(error.message);
    }
  },
  async unlikeBlog(parent, args, context) {
    try {
      validateUser(context);

      const { blogId, userId } = args;

      const removeLike = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: {
            likes: { userId: userId },
          },
        },
        {
          new: true,
        },
      );

      return removeLike;
    } catch (error) {
      console.log(error);
      throw new GraphQLError(error.message);
    }
  },
};

export default mutations;
