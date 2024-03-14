import { Request, Response, Router } from 'express';
import CustomerController from '../controllers/CustomerController';

const customerController = new CustomerController();

const router = Router();

router.get('/', (req: Request, res: Response) => customerController.getAllCustomers(req, res));
router.get('/length', (req: Request, res: Response) => customerController.getCustomersLength(req, res));
router.get('/:id', (req: Request, res: Response) => customerController.getCustomerById(req, res));
router.post('/', (req: Request, res: Response) => customerController.createCustomer(req, res));
router.put('/', (req: Request, res: Response) => customerController.updateCustomer(req, res));

export default router;
