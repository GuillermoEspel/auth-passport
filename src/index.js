require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const engine = require("ejs-mate");
const flash = require("connect-flash");
const morgan = require("morgan");

const session = require("express-session");
const passport = require("passport");
require("./utils/authGoogle");
require("./utils/authTwitter");

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", require("./routes/index"));
app.use("/", require("./routes/auth"));
app.use("/auth/google", require("./routes/authGoogle"));
app.use("/auth/twitter", require("./routes/authTwitter"));

// Initialization
app.listen(app.get("port"), () => {
  console.log(`Listening on port ${app.get("port")}`);
});
