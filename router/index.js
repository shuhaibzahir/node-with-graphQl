const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hi welcome");
});
module.exports = router;
