const express = require("express");
const connectDB = require("./config/db");
const setupGrapql = require("./graphQl.init");
const indexRouter = require("./router/index");

/* -------------------------------- Variables ------------------------------- */
const { PORT = 4004, DB_URL } = process.env;
const app = express();
module.exports = async function () {
  await connectDB(DB_URL).then(() => {
    console.green("Database connected successfully");
  }).catch((err) => {
    console.error(err);
  });
  const server = await setupGrapql(app);
  app.use("/api", indexRouter);
  app.listen(PORT, () => {
    console.green(`server running on http://localhost:${PORT}`);
    console.green(`graphql running on http://localhost:${PORT}${server.graphqlPath}`);
  });
};
