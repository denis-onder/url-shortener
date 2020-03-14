const router = require("express").Router();
const controller = require("./controller");

router.get("/", (_, res) => res.render("pages/index"));
router.get("/:id", (req, res) => {
  const url = controller.getFullURL(req.params.id);
  res.render(`pages/${url ? "redirect" : "index"}`, url ? { url } : null);
});
router.post("/api/shorten", (req, res) => {
  const shortenedURL = controller.shortenURL(req.body.url);
  if (!shortenedURL)
    return res.status(400).json({ error: "Please provide a valid URL." });
  return res.status(200).json({ id: shortenedURL });
});

module.exports = router;
