const express = require("express");
const middleware = require("./middleware");
const { join } = require("path");
const { port, env } = require("./config");
const { readFileSync } = require("fs");
const https = require("https");

class Server {
  constructor() {
    this.app = express();
    // Execute functions responsible for setting the server up here
    this._setViewEngine();
    middleware(this.app);
  }
  _setViewEngine() {
    this.app.use(express.static(join(__dirname, "../public")));
    this.app.set("view engine", "ejs");
  }
  _serverStartHandler(err) {
    if (err) {
      console.error("An error has occured!\n", err);
      process.exit(1);
    } else {
      console.log(
        `Server running!\n${
          process.env.NODE_ENV === "development" ? "http" : "https"
        }://localhost:${port}/\nEnvironment: ${env}`
      );
    }
  }
  start() {
    // if (process.env.NODE_ENV === "development") {
    this.app.listen(port, this._serverStartHandler);
    // } else {
    //   const key = readFileSync(__dirname + "/../domain.key"),
    //     cert = readFileSync(__dirname + "/../domain.crt");

    //   https
    //     .createServer({ key, cert }, this.app)
    //     .listen(port, this._serverStartHandler);
    // }
  }
}

module.exports = new Server();
