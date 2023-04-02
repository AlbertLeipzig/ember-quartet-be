import Message from './model.js';

const postMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export default postMessage;
