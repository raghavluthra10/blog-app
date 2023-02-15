import User from "@/models/userModel";
import Blog from "@/models/blogModel";
import { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { GraphQLError } from "graphql";

const mutations = {
  async signup(parent, args) {
    const { input } = args;
    if (!(input.name && input.email && input.password)) {
      throw new GraphQLError("Please provide all credentials");
    }

    const saltRounds = 10;

    let hashedPassword = bcrypt.hashSync(input.password, saltRounds);

    // const confirmPassword = bcrypt.compareSync(input.password, hashedPassword);

    console.log("hashed password =>", hashedPassword);

    const newUser = " await User.create(input)";
    // return newUser;
  },
};

export default mutations;
