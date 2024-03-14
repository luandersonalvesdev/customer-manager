import { Router } from 'express';
import customerRouter from './customer.router';

const router = Router();

router.use('/customer', customerRouter);

export default router;
