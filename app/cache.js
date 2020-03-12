const NodeCache = require("node-cache");

const options = {
  stdTTL: 3600,
  checkperiod: 300
};

module.exports = new NodeCache(options);
