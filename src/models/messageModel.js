import mongoose from "mongoose";

export const messageSchema = new mongoose.Schema({
  author: {
    type: String,
    trim: true,
    required: [true, "Geben Sie einen Namen ein"],
    maxlength: [50, "Der Name darf maximal 50 Charakteren beeinhalten"],
  },
  email: {
    type: String,
    required: [true, "Geben Sie bitte eine E-Mail Address ein"],
    trim: true,
    maxlength: [50, "Die E-Mail darf maximal 50 Charakteren beeinhalten"],
  },
  date: {
    type: Date,
    trim: true,
    default: Date(),
  },
  body: {
    type: String,
    trim: true,
    required: true,
    maxlength: [
      1000,
      "Die Nachricht darf leider maximal 1000 Charakteren beeinhalten",
    ],
  },
});

export const Message = mongoose.model("Message", messageSchema);
