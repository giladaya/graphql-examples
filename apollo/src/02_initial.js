const { ApolloServer, gql } = require("apollo-server");
const { fetchUsers, fetchUserById } = require("./sampleData");

const typeDefs = gql`
  type Query {
    user(id: ID!): User
  }
  "A user!!"
  type User {
    id: ID!
    """
    User name 8*)
    """
    name: String
    age: Int
  }
`;

const resolvers = {
  Query: {
    user: (root, args, context, info) => {
      return fetchUserById(args.id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
