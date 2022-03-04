const router = require("express").Router();
const passport = require("passport");

router.get("/", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/callback",
  passport.authenticate("google", {
    successRedirect: "/dashboard",
    failureRedirect: "/auth/google/failure",
  })
);

router.get("/failure", (req, res) => {
  res.send("Failed to authenticated...");
});

module.exports = router;
