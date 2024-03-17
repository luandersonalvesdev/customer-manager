import axios from "axios";
import ICustomerStatus from "../interfaces/ICustomerStatus";

const API_BASE_URL = 'http://localhost:3001';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export default class CustomerStatusService {
  public async getAllCustomerStatuses(): Promise<ICustomerStatus[]> {
    const response = await client.get('/status');
    return response.data;
  }
}
