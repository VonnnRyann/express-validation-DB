import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import chalk from "chalk";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();
const port = process.env.PORT;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(
    app.listen(port, () =>
      console.log(
        chalk.cyanBright.bold("Data base and Server listening on port:", port)
      )
    )
  )
  .catch((err) => console.log(err));

/* app.use("/", (req, res) => {
  res.send("hello");
}); */

app.use("/", userRouter);
