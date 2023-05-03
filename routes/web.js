import express from "express";

import { homeController } from "../controller/homeController.js";
import { skillController } from "../controller/skillController.js";
import { contactController } from "../controller/contactController.js";
const router = express.Router();

router.get('/home', homeController);

router.get('/skill', skillController);
router.get('/contact', contactController);


export default router;