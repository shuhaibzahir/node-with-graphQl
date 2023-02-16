/* ----------------------------- require files ----------------------------- */
require("dotenv").config(); // dotenv file
require("./middlewares/log"); // overwriting console
/* ----------------------------------- end ---------------------------------- */
const serverStart = require("./app");
module.exports = serverStart;
serverStart();
