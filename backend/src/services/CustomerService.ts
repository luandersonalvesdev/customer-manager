import { Op } from 'sequelize';
import SequelizeCustomer from '../db/models/customer';
import { CREATED, BAD_REQUEST, CONFLICT, SUCCESS, NOT_FOUND } from '../utils/mapStatusHTTP';
import customerSchema, { customerSchemaWithId } from '../validations/customerSchema';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import ICustomer from '../Interfaces/ICustomer';

export default class CustomerService {
  private customerModel = SequelizeCustomer;

  public async createCustomer(newCustomer: ICustomer): Promise<ServiceResponse<ICustomer>> {
    const { error } = customerSchema.validate(newCustomer);
    if (error) {
      return { status: BAD_REQUEST, data: { message: error.message } };
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
        status: CONFLICT, data: { message: 'Email or CPF already exists' },
      };
    }

    return { status: CREATED, data: customerCreated };
  }

  public async getAllCustomers(limit: number, offset: number): Promise<ServiceResponse<ICustomer[]>> {
    const customers = await this.customerModel.findAll({ limit, offset });
    return { status: SUCCESS, data: customers };
  }

  public async updateCustomer(newCustomerData: ICustomer): Promise<ServiceResponse<ICustomer>> {
    const { error } = customerSchemaWithId.validate(newCustomerData);
    if (error) {
      return { status: BAD_REQUEST, data: { message: error.message } };
    }

    const existingCustomer = await this.customerModel.findOne({
      where: {
        [Op.or]: [
          { email: newCustomerData.email },
          { cpf: newCustomerData.cpf },
        ],
        id: { [Op.not]: newCustomerData.id },
      },
    });

    if (existingCustomer) {
      return { status: CONFLICT, data: { message: 'Email or CPF already exists.' } };
    }

    await this.customerModel.update(newCustomerData, {
      where: { id: newCustomerData.id },
    });

    return { status: SUCCESS, data: newCustomerData };
  }

  public async getCustomerById(id: number): Promise<ServiceResponse<ICustomer>> {
    const customer = await this.customerModel.findOne({ where: { id } });

    if (!customer) {
      return { status: NOT_FOUND, data: { message: 'Customer not found.' } };
    }

    return { status: SUCCESS, data: customer };
  }
}
