import { Router } from "express";
import {getAllRegisters} from "../controllers/registerscontroller.js";

const router = Router();
router.get('/all', getAllRegisters);

export default router;