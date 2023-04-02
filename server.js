import express from 'express';
const app = express.app();
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 8000;
const dbUrl = process.env.MONGO_URL;

import dbConnection from './dbConnection.js';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

import { router } from './router.js';

app.use('/', router);

const startServer = async (url) => {
  try {
    await dbConnection(url);
    app.listen(PORT, console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};

startServer(dbUrl);
