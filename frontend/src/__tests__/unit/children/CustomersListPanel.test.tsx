import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import CustomerListPanel from '../../../pages/Dashboard/CustomersListChild/CustomersListPanel';
import { BrowserRouter } from "react-router-dom";
import CustomerService from '../../../services/CustomerService';
import { CUSTOMERS_LIST_MOCK } from '../../mocks/customer.mock';

describe("Unit - Customers List Panel", () => {

  afterEach(() => {
    jest.clearAllMocks();
  })

  it("Should make fetch of all customers", async () => {
    const getAllCustomersMock = jest.spyOn(CustomerService.prototype, 'getAllCustomers').mockResolvedValue(CUSTOMERS_LIST_MOCK);
    render(
      <BrowserRouter>
        <CustomerListPanel />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(getAllCustomersMock).toHaveBeenCalled();
    });
  });

  it("Should not make fetch of all customers", async () => {
    const setCustomers = jest.fn();
    try {
      jest.spyOn(CustomerService.prototype, 'getAllCustomers').mockRejectedValue({});
    } catch (error) {
      expect(setCustomers).toHaveBeenCalled();
    }
    render(
      <BrowserRouter>
        <CustomerListPanel />
      </BrowserRouter>
    );
  });
})
