const { expect } = require("chai");
// const controller = require("./controller");

const TEST_URL = "https://duckduckgo.com/";
let shortenedURL; // Global for holding the ID value.

describe("Controller", () => {
  describe("Shorten URL", () => {
    it("should return the shortened URL / ID", () => {
      shortenedURL = controller.shortenURL(TEST_URL);
      expect(shortenedURL)
        .to.be.a("string")
        .and.to.be.lengthOf(6);
    });
  });
  describe("Get URL", () => {
    it("should return the URL via the shortened URL / ID", () => {
      const originalURL = controller.getFullURL(shortenedURL);
      expect(originalURL)
        .to.be.a("string")
        .and.to.include("http");
    });
  });
});
