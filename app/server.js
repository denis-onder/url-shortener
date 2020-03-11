const express = require("express");
const { port, env } = require("./config");

class Server {
  constructor() {
    this.app = express();
    // Execute functions responsible for setting the server up here
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
