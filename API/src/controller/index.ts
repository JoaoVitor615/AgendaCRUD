import { Router } from "express";
import agenda from './tarefa.routes'

const router = Router();

router.use('/agenda', agenda);

export default router;