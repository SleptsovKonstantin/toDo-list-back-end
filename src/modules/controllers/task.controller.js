const Task = require("../../db/modules/task/index");

module.exports.getAllTasks = (req, res) => {
  Task.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createNewTask = (req, res) => {
  const task = new Task(req.body);
  task.save().then((result) => {
    Task.find().then((result) => {
      res.send({ data: result });
    });
  });
};

module.exports.changeTaskInfo = (req, res) => {
  const body = req.body;
  const { id } = body;
  if (
    body.hasOwnProperty("id") &&
    (body.hasOwnProperty("text") || body.hasOwnProperty("isCheck"))
  ) {
    Task.updateOne({ _id: id }, body).then(() => {
      Task.find().then((result) => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(422).send("Error! Params not correct");
  }
};

module.exports.deleteTask = (req, res) => {
  const id = req.query._id;
  if (id) {
    Task.deleteOne({ _id: id }).then(() => {
      Task.find().then((result) => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(422).send("Error! Params not correct");
  }
};

module.exports.clearTask = (req, res) => {
  Task.deleteMany().then((result) => {
    if (result.deletedCount > 0) {
      res.send({ data: [] });
    } else {
      res.status(422).send("Error! Params not correct");
    }
  });
};
