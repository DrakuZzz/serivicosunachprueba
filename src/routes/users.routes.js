import { Router } from "express";
import {getAllUsers} from "../controllers/userscontroller.js";

const router = Router();
router.get('/all', getAllUsers);

export default router;