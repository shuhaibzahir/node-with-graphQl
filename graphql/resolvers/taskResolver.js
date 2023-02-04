const helper = require("../../helpers/taskHelpers");

const getAllTask = async (parent, args) => {
  try {
    return await helper.fetchAllTask();
  } catch (error) {
    return error;
  }
};

const getSingleTask = async (parent, args) => {
  return await helper.fetchTask(args.id);
};

const addTask = (parent, args) => {
  return helper.addTask(args).then((data) => {
    return data;
  }).catch((error) => {
    console.error(error);
    return error;
  });
};

const editTask = async (parent, args) => {
  return helper.editTaskbyId(args).then(res => {
    console.log(res);
    return res;
  }).catch((error) => {
    console.error(error);
    return error;
  });
};

const deleteTask = (parent, args) => {
  return helper.deleteTask(args.id).then((res) => {
    return true;
  }).catch((err) => {
    console.error(err);
    return false;
  });
};

exports.taskResolver = {
  Query: { getAllTask, getSingleTask },
  Mutation: { editTask, addTask, deleteTask }
};
