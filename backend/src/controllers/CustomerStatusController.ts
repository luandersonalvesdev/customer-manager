import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import CustomerStatusService from '../services/CustomerStatusService';

export default class CustomerStatusController {
  private customerStatusService = new CustomerStatusService();

  public async getAllCustomerStatuses(_req: Request, res: Response) {
    const { status, data } = await this.customerStatusService.getAllCustomerStatuses();
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
