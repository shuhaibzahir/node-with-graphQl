const express = require("express");
const connectDB = require("./config/db");
const setupGrapql = require("./graphQl.init");
/* -------------------------------- Variables ------------------------------- */
const { PORT = 4004, DB_URL } = process.env;
const app = express();

module.exports = async function () {
  connectDB(DB_URL);
  const server = await setupGrapql(app);
  app.listen(PORT, () => {
    console.green(`server running on http://localhost:${PORT}`);
    console.green(`graphql running on http://localhost:${PORT}${server.graphqlPath}`);
  });
};
