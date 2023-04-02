import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const dbConnection = (url) => {
  return mongoose.connect(url);
};

export default dbConnection;
