import express from "express";

import { messageRouter } from "./messageRouter.js";

export const appRouter = express.Router();

appRouter.use("/message", messageRouter);
