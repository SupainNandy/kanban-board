const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    boardId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: String,

    dueDate: Date,

    column: {
      type: String,
      enum: ["todo", "inprogress", "done"],
      default: "todo",
    },

    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);