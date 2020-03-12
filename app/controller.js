const crypto = require("crypto");
const cache = require("./cache");

// The parameters in the class methods are named store, allowing for dependency injection.
class Controller {
  constructor() {
    this._regex = /\b(https?|ftp|file):\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|]/;
  }
  shortenURL(url, store = cache) {
    if (!this._regex.test(url)) return false;
    const key = crypto
      .randomBytes(6)
      .toString("hex")
      .substring(0, 6);
    store.set(key, url);
    return key;
  }
  getFullURL(id, store = cache) {
    const url = store.get(id);
    if (url === "undefined") return false;
    return url;
  }
}

module.exports = new Controller();
