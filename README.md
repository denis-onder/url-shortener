# urli.xyz

[![Build Status](https://travis-ci.org/denis-onder/url-shortener.svg?branch=master)](https://travis-ci.org/denis-onder/url-shortener)

### About:

[urli.xyz](https://urli.xyz/) is a free, open source, no questions asked URL shortener.
It's using [node-cache](https://www.npmjs.com/package/node-cache) to keep the shortened URLs in memory, making this piece of software blazing fast at what it's supposed to do.

### Setup:

1. Create a `.env` file in the root directory of the project, based off of the `example.env` file.
2. Run `npm install`.
3. Run `npm start` or `npm run dev`, depending if you want Nodemon to run the application or not.