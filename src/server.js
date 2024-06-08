import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { appRouter } from "./routers/appRouter.js";
import { dbConnection } from "./utils/dbConnection.js";
console.clear();
dotenv.config();
const PORT = process.env.PORT || 8000;
const dbUrl = process.env.MONGO_URL;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(appRouter);

const startServer = async (url) => {
  try {
    app.listen(PORT, console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};

dbConnection(dbUrl)
  .then(() => startServer(dbUrl))
  .catch((e) => console.error(e));
