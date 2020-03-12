const router = require("express").Router();
const controller = require("./controller");

router.get("/", (_, res) => res.render("pages/index"));
router.post("/api/shorten", (req, res) => {
  const shortenedURL = controller.shortenURL(req.body.url);
  if (!shortenedURL)
    return res.status(400).json({ error: "Please provide a valid URL." });
  return res.status(200).json({ id: shortenedURL });
});

module.exports = router;
