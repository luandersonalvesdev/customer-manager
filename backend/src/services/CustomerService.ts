import SequelizeCustomer from '../db/models/customer';
import { CREATED } from '../utils/mapStatusHTTP';

export default class CustomerService {
  private customerModel = SequelizeCustomer;

  public async createCustomer(newCustomer: SequelizeCustomer) {
    const customerCreated = await this.customerModel.create(newCustomer);

    return {
      status: CREATED,
      data: customerCreated,
    };
  }
}
