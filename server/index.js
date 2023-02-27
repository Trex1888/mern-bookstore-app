const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middleware
// app.use("/", (req, res, next) => {
//   res.send("Connected");
// });
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect("")
  .then(() => console.log("Connected to db"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
