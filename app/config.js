// Load dotenv file into memory as environmental variables.
require("dotenv").config();

module.exports = {
  port: process.env.PORT || 9900,
  env: process.env.NODE_ENV || "development"
};
