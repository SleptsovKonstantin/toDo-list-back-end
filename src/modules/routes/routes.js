const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createNewTask,
  changeTaskInfo,
  deleteTask,
  clearTask,
} = require("../controllers/task.controller");

// Task routes
router.get("/allTasks", getAllTasks);
router.post("/createTask", createNewTask);
router.patch("/updateTask", changeTaskInfo);
router.delete("/deleteTask", deleteTask);
router.delete("/clearTask", clearTask);

//User routes
module.exports = router;
