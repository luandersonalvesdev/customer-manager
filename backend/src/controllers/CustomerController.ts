import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import CustomerService from '../services/CustomerService';

export default class CustomerController {
  private customerService = new CustomerService();

  public async createCustomer(req: Request, res: Response) {
    const { status, data } = await this.customerService.createCustomer(req.body);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getAllCustomers(req: Request, res: Response) {
    const limit = Number(req.query.limit) || 10;
    const offset = Number(req.query.offset) || 0;
    const { status, data } = await this.customerService.getAllCustomers(limit, offset);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async updateCustomer(req: Request, res: Response) {
    const { status, data } = await this.customerService.updateCustomer(req.body);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getCustomerById(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.customerService.getCustomerById(Number(id));
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
