import { Op } from 'sequelize';
import SequelizeCustomer from '../db/models/customer';
import { CREATED, BAD_REQUEST, CONFLICT } from '../utils/mapStatusHTTP';
import customerSchema from '../validations/customerSchema';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import ICustomer from '../Interfaces/ICustomer';

export default class CustomerService {
  private customerModel = SequelizeCustomer;

  public async createCustomer(newCustomer: ICustomer): Promise<ServiceResponse<ICustomer>> {
    const { error } = customerSchema.validate(newCustomer);
    if (error) {
      return {
        status: BAD_REQUEST,
        data: { message: error.message },
      };
    }

    const [customerCreated, created] = await this.customerModel.findOrCreate({
      where: {
        [Op.or]: [
          { email: newCustomer.email },
          { cpf: newCustomer.cpf }
        ],
      },
      defaults: newCustomer,
    });

    if (!created) {
      return {
        status: CONFLICT,
        data: { message: 'Email or CPF already exists' },
      };
    }

    return {
      status: CREATED,
      data: customerCreated,
    }
  }
}
