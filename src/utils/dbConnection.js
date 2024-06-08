import mongoose from "mongoose";
mongoose.set("strictQuery", false);

export const dbConnection = (url) => {
  return mongoose.connect(url);
};
