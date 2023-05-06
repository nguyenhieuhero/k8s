const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth");
const todoRoute = require("./routes/todo");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

mongoose
  .connect("mongodb://root:12345678@mongo-service.default.svc.cluster.local:27017")
  .then(() => {
    console.log("connect to mongodb success");
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/todo", todoRoute);

app.listen(PORT, () => {
  console.log("server is running at ", PORT);
});
