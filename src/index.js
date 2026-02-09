const express = require("express");
const app = express();

app.use(express.json());

const todoRoutes = require("./routes/todo.routes");
app.use(todoRoutes);

app.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});

