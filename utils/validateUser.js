import { GraphQLError } from "graphql";

const validateUser = (context) => {
  const { session } = context;
  if (!session) {
    throw new GraphQLError("login to get access to this resource");
  }
};

export default validateUser;
