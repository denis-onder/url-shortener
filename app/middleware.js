const rateLimit = require("express-rate-limit");
const { json } = require("body-parser");
const router = require("./router");

const limiterOptions = {
  windowMs: 1440 * 60 * 1000, // 24 hours
  max: 100, // 100 requests per IP
  message: "Too many URLs shortened from this IP, please try again in 24 hours."
};

const limiter = rateLimit(limiterOptions);

module.exports = app => {
  app.use(json());
  app.use(router);
  app.use("/api", limiter);
  app.set("view engine", "ejs");
};
