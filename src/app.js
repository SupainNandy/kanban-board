const express = require("express");
const cors = require("cors");

const authRoutes =
  require("./routes/auth.routes");

const boardRoutes =
  require("./routes/board.routes");

const taskRoutes =
  require("./routes/task.routes");

const app = express();

app.use(cors(
  {
    origin: ["https://kanbanboard-two-beta.vercel.app",
      "http://localhost:3000",
      
    ]

    
  }
));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/boards", boardRoutes);
app.use("/api/tasks", taskRoutes);

module.exports = app;