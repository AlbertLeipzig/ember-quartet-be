import { Message } from "../models/messageModel.js";

export const postMessage = async (req, res, next) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json({ message });
  } catch (e) {
    next(e);
  }
};

export const getAllMessage = async (req, res, next) => {
  try {
    const messages = await Message.find();
    res.status(200).json({ messages });
  } catch (e) {
    next(e);
  }
};

export const deleteAllMessages = async (req, res, next) => {
  try {
    const message = await Message.deleteMany();
    res.status(200).json({ message });
  } catch (e) {
    next(e);
  }
};
