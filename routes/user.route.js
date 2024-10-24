import express from "express"
import { yashansh } from "../controllers/userController.js";

const router = express.Router();

router.get("/yashansh", yashansh);

export default router;