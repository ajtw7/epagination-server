var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var wishlistRouter = require("./routes/wishlist.routes")
const finishedBookRouter = require("./routes/finishedbook.routes")

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: [process.env.FRONTEND_URL]

  })
);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/wishlist", wishlistRouter)
app.use("/finishedBooks", finishedBookRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");

   // render the error page
   res.status(err.status || 500);
   res.render("error");
 });
 mongoose
   .connect(
     //change db name
     process.env.MONGODB_URI || "mongodb://0.0.0.0/epagination-server"
   )
   .then((x) =>
     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
   )
   .catch((err) => console.error("Error connecting to mongo", err));



module.exports = app;
