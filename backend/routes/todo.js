const express = require("express");
const Router = express.Router();
const TodoSchema = require("../model/todo");

Router.post("/add", async (req, res) => {
  const data = req.body;
  console.log("add todo: ", data);
  try {
    const newTodo = new TodoSchema(data);
    await newTodo.save();

    return res
      .status(200)
      .json({ success: true, message: "Them thành công", data: null });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ success: false, message: "Them không thành công!" });
  }
});

Router.post("/get", async (req, res) => {
  const { userId } = req.body;
  console.log("get todo: ", userId);
  try {
    const data = await TodoSchema.find({ userId: userId });

    const TodoList = data.map((item)=> item.text)
    return res
      .status(200)
      .json({ success: true, message: "Lay thành công", data: TodoList });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ success: false, message: "Them không thành công!" });
  }
});

module.exports = Router;
