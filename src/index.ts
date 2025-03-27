import express from "express";
import usersRouter from "./routes/users";

const app = express();

app.use("/", (req, res) => {
  res.send("Welcome to Express TypeScript");
});

app.use("/api/users", usersRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
