const router = require("express").Router();

router.get("/login", (req, res) => {
  res.render("login.ejs", {});
});

checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
};
router.get("/dashboard", checkAuthenticated, (req, res) => {
  res.render("dashboard.ejs", { name: req.user.displayName });
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

module.exports = router;
