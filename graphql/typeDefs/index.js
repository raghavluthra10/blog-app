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
    usersBlogs(_id: String): [Blog]
    usersBlog(_id: String): Blog
    blogs: [Blog]
    users: [User]
  }

  input SignupInput {
    name: String
    email: String
    password: String
  }

  input AddBlogInput {
    deltaOne: String
    deltaTwo: String
    userId: String
  }

  input UpdateBlogInput {
    deltaOne: String
    deltaTwo: String
  }

  input LoginInput {
    email: String
    password: String
  }

  type Mutation {
    signup(input: SignupInput): User
    login(input: LoginInput): Boolean
    addBlog(input: AddBlogInput): Blog
    deleteBlog(_id: String): Boolean
    updateBlog(input: UpdateBlogInput): Blog
  }
`;

export default typeDefs;
