const express = require("express");
const middleware = require("./middleware");
const { join } = require("path");
const { port, env } = require("./config");

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
        `Server running!\nhttp://localhost:${port}/\nEnvironment: ${env}`
      );
    }
  }
  start() {
    this.app.listen(port, this._serverStartHandler);
  }
}

module.exports = new Server();
