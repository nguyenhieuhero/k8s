const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/user")
dotenv.config()
app.use(cors());
app.use("/login",authRoute)

app.post("/",(req,res)=>{
    console.log(req.body)
})


mongoose
  .connect("mongodb://root:12345678@mongo-service.default.svc.cluster.local:27017")
  .then(() => {
    console.log("connect to mongodb success");
  })
  .catch((e) => {
    console.log(e);
  });
app.listen(3000,()=>{
    console.log("Server start on port 3000")
})