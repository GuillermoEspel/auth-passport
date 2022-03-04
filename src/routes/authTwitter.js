const router = require("express").Router();
const passport = require("passport");

router.get("/", passport.authenticate("twitter", { scope: ["profile"] }));

router.get(
  "/callback",
  passport.authenticate("twitter", {
    successRedirect: "/dashboard",
    failureRedirect: "/auth/twitter/failure",
  })
);

router.get("/failure", (req, res) => {
  res.send("Failed to authenticated...");
});

module.exports = router;
