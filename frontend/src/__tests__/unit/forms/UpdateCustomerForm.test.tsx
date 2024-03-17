import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UpdateCustomerForm from '../../../components/forms/UpdateCustomerForm';
import { BrowserRouter } from "react-router-dom";
import { CUSTOMER_STATUSES_MOCK } from '../../mocks/customerStatus.mock';
import { CUSTOMER_MOCK, VALID_PHONE_NUMBER_MOCK, VALID_CPF_MOCK, INVALID_EMAIL_MOCK } from '../../mocks/customer.mock'
import CustomerService from '../../../services/CustomerService';

describe("Unit - Update Customer Form", () => {

  afterEach(() => {
    jest.clearAllMocks();
  })

  it("Should render the update customer form", () => {
    render(
      <BrowserRouter>
        <UpdateCustomerForm customerStatuses={ CUSTOMER_STATUSES_MOCK } customer={ CUSTOMER_MOCK } />
      </BrowserRouter>
    );

    const fullNameInput = screen.getByPlaceholderText('Nome');
    const emailInput = screen.getByPlaceholderText('E-mail');
    const cpfInput = screen.getByPlaceholderText('CPF');
    const phoneNumberInput = screen.getByPlaceholderText('Telefone');

    expect(fullNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(cpfInput).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();

    const selectInput = screen.getByRole('combobox');
    expect(selectInput).toBeInTheDocument();

    const optionsBySelect = screen.getAllByRole('option');
    expect(optionsBySelect).toHaveLength(CUSTOMER_STATUSES_MOCK.length);

    expect(optionsBySelect[0]).toHaveAttribute('value', `${CUSTOMER_STATUSES_MOCK[0].id}`);
    expect(optionsBySelect[1]).toHaveAttribute('value', `${CUSTOMER_STATUSES_MOCK[1].id}`);
    expect(optionsBySelect[2]).toHaveAttribute('value', `${CUSTOMER_STATUSES_MOCK[2].id}`);
    expect(optionsBySelect[3]).toHaveAttribute('value', `${CUSTOMER_STATUSES_MOCK[3].id}`);

    expect(optionsBySelect[0]).toHaveTextContent(CUSTOMER_STATUSES_MOCK[0].name);
    expect(optionsBySelect[1]).toHaveTextContent(CUSTOMER_STATUSES_MOCK[1].name);
    expect(optionsBySelect[2]).toHaveTextContent(CUSTOMER_STATUSES_MOCK[2].name);
    expect(optionsBySelect[3]).toHaveTextContent(CUSTOMER_STATUSES_MOCK[3].name);
  });

  it("Inputs should be filled in with the customer that was passed", () => {
    render(
      <BrowserRouter>
        <UpdateCustomerForm customerStatuses={ CUSTOMER_STATUSES_MOCK } customer={ CUSTOMER_MOCK } />
      </BrowserRouter>
    );

    const fullNameInput = screen.getByPlaceholderText('Nome');
    const emailInput = screen.getByPlaceholderText('E-mail');
    const cpfInput = screen.getByPlaceholderText('CPF');
    const phoneNumberInput = screen.getByPlaceholderText('Telefone');

    expect(fullNameInput).toHaveValue(CUSTOMER_MOCK.fullName);
    expect(emailInput).toHaveValue(CUSTOMER_MOCK.email);
    expect(cpfInput).toHaveValue('111.111.111-11');
    expect(phoneNumberInput).toHaveValue('(11)11111-1111');
  });

  it("Should masks be applied to inputs", async () => {
    render(
      <BrowserRouter>
        <UpdateCustomerForm customerStatuses={ CUSTOMER_STATUSES_MOCK } customer={ CUSTOMER_MOCK } />
      </BrowserRouter>
    );

    const cpfInput = screen.getByPlaceholderText('CPF');
    const phoneNumberInput = screen.getByPlaceholderText('Telefone');

    fireEvent.change(cpfInput, { target: { value: '' } });
    fireEvent.change(cpfInput, { target: { value: VALID_CPF_MOCK } });
    expect(cpfInput).toHaveValue('111.111.111-11');

    fireEvent.change(phoneNumberInput, { target: { value: '' } });
    fireEvent.change(phoneNumberInput, { target: { value: VALID_PHONE_NUMBER_MOCK } });
    expect(phoneNumberInput).toHaveValue('(11)11111-1111');
  });

  it("Should show errors and not be able to submit.", async () => {
    render(
      <BrowserRouter>
        <UpdateCustomerForm customerStatuses={ CUSTOMER_STATUSES_MOCK } customer={ CUSTOMER_MOCK } />
      </BrowserRouter>
    );

    const fullNameInput = screen.getByPlaceholderText('Nome');
    const emailInput = screen.getByPlaceholderText('E-mail');
    const cpfInput = screen.getByPlaceholderText('CPF');
    const phoneNumberInput = screen.getByPlaceholderText('Telefone');
    const selectInput = screen.getByRole('combobox');

    fireEvent.change(fullNameInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(cpfInput, { target: { value: '' } });
    fireEvent.change(phoneNumberInput, { target: { value: '' } });
    fireEvent.change(selectInput, { target: { value: '' } });

    const updateBtn = screen.getByRole('button', { name: 'Atualizar' });
    expect(updateBtn).not.toBeDisabled();
    fireEvent.click(updateBtn);

    await waitFor(() => {
      const spanErrorFullName = screen.getByText('Nome é obrigatório');
      const spanErrorEmail = screen.getByText('E-mail é obrigatório');
      const spanErrorCpf = screen.getByText('CPF inválido');
      const spanErrorPhoneNumber = screen.getByText('Telefone deve ter 11 números');
      const spanErrorStatus = screen.getByText('Status é obrigatório');

      expect(spanErrorFullName).toBeInTheDocument();
      expect(spanErrorEmail).toBeInTheDocument();
      expect(spanErrorCpf).toBeInTheDocument();
      expect(spanErrorPhoneNumber).toBeInTheDocument();
      expect(spanErrorStatus).toBeInTheDocument();
    });

    expect(updateBtn).toBeDisabled();
  });

  it("Should can update a customer.", async () => {
    render(
      <BrowserRouter>
        <UpdateCustomerForm customerStatuses={ CUSTOMER_STATUSES_MOCK } customer={ CUSTOMER_MOCK } />
      </BrowserRouter>
    );

    const updateCustomerStub = jest.spyOn(CustomerService.prototype, 'updateCustomer').mockResolvedValue(CUSTOMER_MOCK);

    const fullNameInput = screen.getByPlaceholderText('Nome');

    fireEvent.change(fullNameInput, { target: { value: '${VALID_FULL_NAME_MOCK} da Silva' } });

    const updateBtn = screen.getByRole('button', { name: 'Atualizar' });
    expect(updateBtn).not.toBeDisabled();
    fireEvent.click(updateBtn);

    await waitFor(() => {
      expect(updateCustomerStub).toHaveBeenCalled();
    });
  });

  it("Should can not update a customer.", async () => {
    render(
      <BrowserRouter>
        <UpdateCustomerForm customerStatuses={ CUSTOMER_STATUSES_MOCK } customer={ CUSTOMER_MOCK } />
      </BrowserRouter>
    );
    const setErrorMock = jest.fn();
    const errorResponseMock = {
      response: {
        data: {
          message: '"email" must be a valid email!'
        }
      }
    };
    jest.spyOn(CustomerService.prototype, 'updateCustomer').mockRejectedValue(errorResponseMock);

    const emailInput = screen.getByPlaceholderText('E-mail');
    fireEvent.change(emailInput, { target: { value: INVALID_EMAIL_MOCK } });

    const updateBtn = screen.getByRole('button', { name: 'Atualizar' });
    expect(updateBtn).not.toBeDisabled();
    try {
      fireEvent.click(updateBtn);
    } catch (error) {
      expect(setErrorMock).toHaveBeenCalled();
    }
  });
})
