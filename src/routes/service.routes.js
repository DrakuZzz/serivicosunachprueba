import { Router } from "express";
import {getServices} from "../controllers/servicecontroller.js";

const router = Router();
router.get('/servicio', getServices);

export default router;