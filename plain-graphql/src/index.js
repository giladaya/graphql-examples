const {
  parse,
  printSchema,
  validate,
  execute,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} = require("graphql");
const { fetchUsers, fetchUserById } = require("./sampleData");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: GraphQLID,
      // `resolve` is not needed here: graphql-js infers the returned value.
      // Remove the comments to see that it's called when the query contains the `id` field.
      // resolve: (root, args, context, info) => {
      //   console.log(`Resolver called: user.id`)
      //   return root.id
      // }
    },
    name: {
      type: GraphQLString,
      // `resolve` is not needed here: graphql-js infers the returned value.
      // Remove the comments to see that it's called when the query contains the `name` field.
      // resolve: (root, args, context, info) => {
      //   console.log(`Resolver called: user.name`)
      //   return root.name
      // }
    },
    age: {
      type: GraphQLInt,
      // `resolve` is not needed here: graphql-js infers the returned value.
      // Remove the comments to see that it's called when the query contains the `name` field.
      // resolve: (root, args, context, info) => {
      //   console.log(`Resolver called: user.age`)
      //   return root.age
      // }
    },
  },
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      user: {
        type: UserType,
        args: {
          id: { type: GraphQLID },
        },
        resolve: (root, args, context, info) => {
          console.log(`Resolver called: user`);
          return fetchUserById(args.id);
        },
      },
    },
  }),
});

// Create and print SDL-representation of schema
const sdlSchema = printSchema(schema);
console.log(`SCHEMA\n------`);
console.log(sdlSchema);

// Define the query
const queryString = `
{
  user(id: "bbb") {
    id
    name
    age
  }
}`;
const queryAST = parse(queryString);

// Validate the query against the schema
console.log(`VALIDATION\n----------`);
const errors = validate(schema, queryAST);
if (errors.length === 0) {
  console.log(`Query is valid`);
} else {
  console.log(`Errors: ${JSON.stringify(errors)}`);
}

// Execute the query against the schema
// https://graphql.org/graphql-js/execution/#execute
console.log(`\nEXECUTION\n---------`);
execute(schema, queryAST)
  .then((result) => {
    console.log(`\nResult: \n${JSON.stringify(result)}`);
  })
  .catch((e) => console.log(`\nError: \n${JSON.stringify(e)}`));
