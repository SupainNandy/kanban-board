const Board = require("../models/board.model");

exports.getBoards = async (req, res) => {
  const boards = await Board.find({
    owner: req.user.id,
  });

  res.json(boards);
};

exports.createBoard = async (req, res) => {
  const board = await Board.create({
    title: req.body.title,
    owner: req.user.id,
  });

  res.status(201).json(board);
};

exports.updateBoard = async (req, res) => {
  const board =
    await Board.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(board);
};

exports.deleteBoard = async (req, res) => {
  await Board.findByIdAndDelete(req.params.id);

  res.json({
    message: "Board deleted",
  });
};