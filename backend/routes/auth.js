const express = require("express");
const Router = express.Router();
const UserSchema = require("../model/user");

Router.post("/login", async (req, res) => {
  const data = req.body;
  console.log("a user login: ", data);

  try {
    const user = await UserSchema.findOne(data);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Sai tên đăng nhập hoặc mật khẩu" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Đăng nhập thành công", user: user });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ success: false, message: "Đăng nhập không thành công!" });
  }
});

Router.post("/register", async (req, res) => {
  const data = req.body;
  console.log("a user register: ", data);
  try {
    const newUser = new UserSchema(data);
    await newUser.save();

    return res
      .status(200)
      .json({ success: true, message: "Đăng kí thành công", user: newUser });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ success: false, message: "Đăng nhập không thành công!" });
  }
});

module.exports = Router;
