const { ApolloServer } = require("apollo-server-express");
const { taskSchema } = require("./graphql/schemas/taskSchema");
const { taskResolver } = require("./graphql/resolvers/taskResolver");

module.exports = async function (app) {
  const server = new ApolloServer({
    typeDefs: [taskSchema],
    resolvers: [taskResolver]
  });

  /* ---------------- adding our express app to graphql server ---------------- */
  await server.start();
  server.applyMiddleware({ app });
  return server;
};
