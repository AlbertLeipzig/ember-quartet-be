import express from 'express';
const router = express.Router();
import { postMessage } from './controller.js';

router.route('/').post(postMessage);

export default router;
