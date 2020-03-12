const router = require("express").Router();

router.get("/", (_, res) => res.render("pages/index"));

module.exports = router;
