import User from "@/models/userModel";
import Blog from "@/models/blogModel";
import { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { GraphQLError } from "graphql";
import { signIn } from "next-auth/react";
import validateUser from "@/utils/validateUser";

const mutations = {
  async addBlog(parent, args, context) {
    validateUser(context);

    const { input } = args;
    // const { deltaOne, deltaTwo, userId } = input;

    let blogToBeAdded = { deltaOne: input.deltaOne, userId: input.userId };

    if (input.deltaTwo) {
      blogToBeAdded.deltaTwo = input.deltaTwo;
    }

    const addBlog = await Blog.create(blogToBeAdded);

    return addBlog;
  },
  async updateBlog(parent, args, context) {
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
  },

  async deleteBlog(parent, args, context) {
    validateUser(context);

    const { blogId } = args;

    const blogToBeDeleted = await Blog.findOneAndDelete({
      _id: blogId,
    });

    return blogToBeDeleted;
  },
};

export default mutations;
