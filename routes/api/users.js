import { Router } from 'express';
const router = Router();

import User from "../../model/User.js";

router.get('/test', (req, res) => res.send('book route testing!'));

export default router;