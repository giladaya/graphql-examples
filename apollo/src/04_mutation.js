const { ApolloServer, gql } = require("apollo-server");
const { fetchUsers, fetchUserById, createUser } = require("./sampleData");

const typeDefs = gql`
  type Query {
    users: [User]!
    user(id: ID!): User
  }
  type Mutation {
    createUser(name: String!, age: Int): User
  }
  type User {
    id: ID!
    name: String
    age: Int
    friends: [User]!
  }
`;

const resolvers = {
  Query: {
    users: () => fetchUsers(),
    user: (root, args, context, info) => {
      return fetchUserById(args.id);
    },
  },
  Mutation: {
    createUser: (root, args, context, info) => {
      console.log(args);
      const { name, age } = args;
      const record = createUser(name, age);
      return record;
    },
  },
  User: {
    friends: (root, args, context, info) => {
      return root.friends.map((id) => fetchUserById(id));
    },
  },
};

// The context object is shared across all resolvers
const context = ({ req }) => ({
  world: "earth",
  // user: getUser(req.headers.authorization),
  // db: getConnection(),
});

const server = new ApolloServer({ typeDefs, resolvers, context });

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
