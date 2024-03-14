import { Request, Response, Router } from 'express';
import CustomerController from '../controllers/CustomerController';

const customerController = new CustomerController();

const router = Router();

router.post('/', (req: Request, res: Response) => customerController.createCustomer(req, res));

export default router;
