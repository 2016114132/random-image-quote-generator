import express from "express"
import { getHome, getRandomData } from "../controllers/appController.js"

const router = express.Router();

router.get("/", getHome);

router.post("/", getRandomData);

export default router