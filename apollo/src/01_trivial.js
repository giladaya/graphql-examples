const { ApolloServer, gql } = require("apollo-server");
const { fetchUsers, fetchUserById } = require("./sampleData");

const typeDefs = gql`
  type Query {
    foo: String
  }
`;

const resolvers = {
  Query: {
    foo: () => "Hello",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
