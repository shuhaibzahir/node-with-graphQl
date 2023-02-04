const mongoose = require("mongoose");

module.exports = (url) => {
  mongoose.connect(url).then(() => {
    console.green("Database connected successfully");
  }).catch((err) => {
    console.error(err);
  });
};
