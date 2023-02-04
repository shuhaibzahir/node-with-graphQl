const Task = require("../models/taskSchema");
module.exports = {
/* ------------------------------ get all task ------------------------------ */
  fetchAllTask: () => {
    return Task.find({}).lean();
  },
  fetchTask: (id) => {
    return Task.findOne({ _id: id }).lean();
  },
  addTask: ({ title, time }) => {
    const taskCreate = new Task({
      title,
      time
    });
    return taskCreate.save();
  },
  editTaskbyId: (setData) => {
    const _id = setData.id;
    return Task.findOneAndUpdate({ _id }, { $set: setData.data }, { new: true });
  },
  deleteTask: (id) => {
    return Task.deleteOne({ _id: id });
  }
};
