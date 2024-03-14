import SequelizeCustomerStatus from '../db/models/customerstatus';
import { SUCCESS } from '../utils/mapStatusHTTP';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import ICustomerStatus from '../Interfaces/ICustomerStatus';

export default class CustomerStatusService {
  private customerModel = SequelizeCustomerStatus;

  public async getAllCustomerStatuses(): Promise<ServiceResponse<ICustomerStatus[]>> {
    const customerStatuses = await this.customerModel.findAll();
    return { status: SUCCESS, data: customerStatuses };
  }
}
