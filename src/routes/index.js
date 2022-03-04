const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).send("Home");
});

router.get("/status", (req, res) => {
  res.status(200).json({ message: "OK" });
});

module.exports = router;