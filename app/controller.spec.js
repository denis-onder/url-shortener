const { expect } = require("chai");
const controller = require("./controller");

const TEST_URL = "https://duckduckgo.com/";
let shortenedURL; // Global for holding the ID value.

// Testing cache
const NodeCache = require("node-cache");

const options = {
  stdTTL: 10,
  checkperiod: 10
};

const TEST_CACHE = new NodeCache(options);

describe("Controller", () => {
  describe("Shorten URL", () => {
    it("should return the shortened URL / ID", () => {
      shortenedURL = controller.shortenURL(TEST_URL, TEST_CACHE);
      expect(shortenedURL)
        .to.be.a("string")
        .and.to.be.lengthOf(6);
    });
  });
  describe("Get URL", () => {
    it("should return the URL via the shortened URL / ID", () => {
      const originalURL = controller.getFullURL(shortenedURL, TEST_CACHE);
      expect(originalURL).to.equal(TEST_URL);
    });
  });
});
