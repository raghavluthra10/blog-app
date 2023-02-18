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
    userId: String
    comment: String
  }

  type Blog {
    _id: String
    deltaOne: String
    deltaTwo: String
    userId: String
    comments: [Comment]
    likes: [String]
    createdAt: String
    updatedAt: String
  }

  type Query {
    user(_id: String): User
    usersAllBlogs(userId: String): [Blog]
    usersSingleBlog(_id: String): Blog
    blogs: [Blog]
    users: [User]
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
  }
`;

export default typeDefs;
