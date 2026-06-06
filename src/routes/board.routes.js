const router = require("express").Router();

const auth = require("../middleware/authMiddleware");

const {
  getBoards,
  createBoard,
  updateBoard,
  deleteBoard,
} = require("../controllers/board.controller");

router.get("/", auth, getBoards);
router.post("/", auth, createBoard);
router.put("/:id", auth, updateBoard);
router.delete("/:id", auth, deleteBoard);

module.exports = router;