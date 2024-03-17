import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import UpdateCustomerPanel from '../../pages/Dashboard/UpdateCustomerChild/UpdateCustomerPanel'
import { BrowserRouter } from "react-router-dom";
import { CUSTOMER_STATUSES_MOCK } from '../mocks/customerStatus.mock';
import CustomerStatusService from '../../services/CustomerStatusService';
import CustomerService from '../../services/CustomerService';
import { CUSTOMER_MOCK } from '../mocks/customer.mock';

describe("Unit - Update Customer Panel", () => {

  afterEach(() => {
    jest.clearAllMocks();
  })

  it("Should make fetch of customer statuses and customer data", async () => {
    const getAllStatusesMock = jest.spyOn(CustomerStatusService.prototype, 'getAllCustomerStatuses').mockResolvedValue(CUSTOMER_STATUSES_MOCK);
    const getCustomerByIdMock = jest.spyOn(CustomerService.prototype, 'getCustomerById').mockResolvedValue(CUSTOMER_MOCK);
    render(
      <BrowserRouter>
        <UpdateCustomerPanel />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(getAllStatusesMock).toHaveBeenCalled();
      expect(getCustomerByIdMock).toHaveBeenCalled();
    });
  });

  it("Should could not make fetch of customer statuses and customer data", async () => {
    const setCustomerStatuses = jest.fn();
    const setCustomer = jest.fn();
    try {
      jest.spyOn(CustomerStatusService.prototype, 'getAllCustomerStatuses').mockRejectedValue({})
      jest.spyOn(CustomerService.prototype, 'getCustomerById').mockRejectedValue({});
    } catch (error) {
      expect(setCustomerStatuses).toHaveBeenCalled();
      expect(setCustomer).toHaveBeenCalled();
    }
    render(
      <BrowserRouter>
        <UpdateCustomerPanel />
      </BrowserRouter>
    );
  });
})
