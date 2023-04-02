import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  author: {
    type: String,
    trim: true,
    required: [true, 'a message must have an author'],
    maxlength: [50, "an author can't be longer than 50 characters"],
  },
  mail: {
    type: String,
    required: [true, 'a message must have an email'],
    trim: true,
    maxlength: [50, "an email can't be longer than 50 characters"],
  },
  date: {
    type: Date,
    trim: true,
    required: true,
    default: Date(),
  },
  body: {
    type: String,
    trim: true,
    required: true,
    maxlength: [
      1000,
      'The max length of characters is 1000. In order to send a longer message, please write an email directly to albertclem@protonmail.com',
    ],
  },
});

export default mongoose.model("Message", messageSchema)