import express from "express";
import {
  postMessage,
  getAllMessage,
  deleteAllMessages,
} from "../controllers/messageController.js";
export const messageRouter = express.Router();

messageRouter
  .route("/")
  .post(postMessage)
  .get(getAllMessage)
  .delete(deleteAllMessages);
