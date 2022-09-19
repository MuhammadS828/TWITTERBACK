const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(require("./routs/users.route"));
app.use(require("./routs/posts.route"));
app.use(require("./routs/comments.route"));

mongoose.connect(
  "mongodb+srv://Magomed:Sup1001magomed@cluster1.om1j1fy.mongodb.net/Twitter",
  (err) => {
    if (err) {
      console.log("err");
    }
    console.log("db connection");
    app.listen(3000, () => {
      console.log("started");
    });
  }
);
