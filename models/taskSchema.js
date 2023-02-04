const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  status: {
    type: String,
    default: "Todo",
    require: true,
    enum: ["Todo", "Inprogress", "Done"]
  },
  time: {
    type: String,
    require: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);
