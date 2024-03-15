import axios from "axios";
import ICustomer, { ICustomerForm } from "../interfaces/ICustomer";

const API_BASE_URL = 'http://localhost:3001';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export default class CustomerService {
  public async getAllCustomers(): Promise<ICustomer[]> {
    const response = await client.get('/customer');
    return response.data;
  }

  public async createCustomer(customerData: ICustomerForm): Promise<ICustomer> {
    return client.post('/customer', customerData);
  }
}
