const router = require("express").Router();

const auth = require('../middleware/authMiddleware');

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  moveTask,
} = require("../controllers/task.controller");

router.get("/:boardId", auth, getTasks);
router.post("/", auth, createTask);
router.put("/:id", auth, updateTask);
router.delete("/:id", auth, deleteTask);
router.patch("/move", auth, moveTask);

module.exports = router;