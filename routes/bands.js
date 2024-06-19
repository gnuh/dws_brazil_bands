import express from 'express';
import bandsController from "../controllers/bands.js";

const router = express.Router();

router.get('/', bandsController);

export default router;
