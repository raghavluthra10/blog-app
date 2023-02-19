// make seperate files for type defs and export it from this file.
// import { createYoga, createSchema } from "graphql-yoga";

const typeDefs = /* GraphQL */ `
  type User {
    _id: String
    name: String
    email: String
    password: String
    image: String
    emailVerified: Boolean
    createdAt: String
    updatedAt: String
  }

  type Comment {
    _id: String
    userId: String
    comment: String
  }

  type Like {
    _id: String
    userId: String
    name: String
    email: String
  }

  type Blog {
    _id: String
    deltaOne: String
    deltaTwo: String
    userId: String
    comments: [Comment]
    likes: [Like]
    createdAt: String
    updatedAt: String
  }

  type Query {
    user(_id: String): User
    usersAllBlogs(userId: String): [Blog]
    usersSingleBlog(_id: String): Blog
    blogs: [Blog]
    users: [User]
    getAllComments(blogId: String): [Comment]
    blogLikes(blogId: String): [Like]
  }

  input AddBlogInput {
    deltaOne: String
    deltaTwo: String
    userId: String
  }

  input UpdateBlogInput {
    deltaOne: String
    deltaTwo: String
    blogId: String
  }

  type Mutation {
    addBlog(input: AddBlogInput): Blog
    deleteBlog(blogId: String): [Blog]
    updateBlog(input: UpdateBlogInput): Blog
    addComment(comment: String, userId: String, blogId: String): Comment
    deleteComment(blogId: String, commentId: String): Comment
    likeBlog(blogId: String, userId: String): Blog
    unlikeBlog(blogId: String, userId: String): Blog
  }
`;

export default typeDefs;
