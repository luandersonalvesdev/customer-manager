import { Router } from 'express';
import customerRouter from './customer.router';
import customerStatusRouter from './customerStatus.route';

const router = Router();

router.use('/customer', customerRouter);
router.use('/status', customerStatusRouter);

export default router;
