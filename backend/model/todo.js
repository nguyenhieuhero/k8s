const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: { type: String, require: true },
  userId: {type:String, require:true}
}, {timestamps:true})


module.exports = mongoose.model('Todo', TodoSchema)