import Message from "./src/models/messageModel.js";

export const postMessage = async (req, res, next) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json({ message });
  } catch (e) {
    next(e);
  }
};
