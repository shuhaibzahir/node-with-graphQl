"use strict";
const serverStart = require("./index");
const serverless = require("serverless-http");
module.exports.hello = serverless(serverStart);
