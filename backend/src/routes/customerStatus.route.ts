import { Request, Response, Router } from 'express';
import CustomerStatusController from '../controllers/CustomerStatusController';

const customerStatusController = new CustomerStatusController();

const router = Router();

router.get('/', (req: Request, res: Response) => customerStatusController.getAllCustomerStatuses(req, res));

export default router;
