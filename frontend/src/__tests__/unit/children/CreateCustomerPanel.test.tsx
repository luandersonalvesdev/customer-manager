import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import CreateCustomerPanel from '../../../pages/Dashboard/CreateCustomerChild/CreateCustomerPanel';
import { BrowserRouter } from "react-router-dom";
import { CUSTOMER_STATUSES_MOCK } from '../../mocks/customerStatus.mock';
import CustomerStatusService from '../../../services/CustomerStatusService';

describe("Unit - Create Customer Panel", () => {

  afterEach(() => {
    jest.clearAllMocks();
  })

  it("Should make fetch of customer statuses", async () => {
    const getAllStatusesMock = jest.spyOn(CustomerStatusService.prototype, 'getAllCustomerStatuses').mockResolvedValue(CUSTOMER_STATUSES_MOCK);
    render(
      <BrowserRouter>
        <CreateCustomerPanel />
      </BrowserRouter>
    );


    await waitFor(() => {
      expect(getAllStatusesMock).toHaveBeenCalled();
    });
  });

  it("Should could not make fetch of customer statuses", async () => {
    const setIsLoading = jest.fn();
    try {
      jest.spyOn(CustomerStatusService.prototype, 'getAllCustomerStatuses').mockRejectedValue({});
    } catch (error) {
      expect(setIsLoading).toHaveBeenCalled();
    }
    render(
      <BrowserRouter>
        <CreateCustomerPanel />
      </BrowserRouter>
    );
  });
})
