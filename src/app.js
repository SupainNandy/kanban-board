const express = require("express");
const cors = require("cors");

const authRoutes =
  require("./routes/auth.routes");

const boardRoutes =
  require("./routes/board.routes");

const taskRoutes =
  require("./routes/task.routes");

const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://kanbanboard-xi.vercel.app",
    ],
    credentials: true,
  })
);

app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/boards", boardRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.get("/api/test", (req, res) => {
  res.json({ success: true });
});

module.exports = app;