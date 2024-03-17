import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import CreateCustomerForm from '../../components/forms/CreateCustomerForm';
import { BrowserRouter } from "react-router-dom";
import { CUSTOMER_STATUSES_MOCK } from '../mocks/customerStatus.mock';
import {
  CUSTOMER_MOCK, VALID_FULL_NAME_MOCK, VALID_PHONE_NUMBER_MOCK, VALID_CPF_MOCK, VALID_EMAIL_MOCK, INVALID_EMAIL_MOCK
} from '../mocks/customer.mock'
import CustomerService from '../../services/CustomerService';
import { useForm } from 'react-hook-form';

describe("Unit - Create Customer Form", () => {

  afterEach(() => {
    jest.clearAllMocks();
  })

  it("Should render the create customer form", () => {
    render(
      <BrowserRouter>
        <CreateCustomerForm customerStatuses={ CUSTOMER_STATUSES_MOCK } />
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

  it("Masks should by applied to inputs", () => {
    render(
      <BrowserRouter>
        <CreateCustomerForm customerStatuses={ CUSTOMER_STATUSES_MOCK } />
      </BrowserRouter>
    );

    const cpfInput = screen.getByPlaceholderText('CPF');
    const phoneNumberInput = screen.getByPlaceholderText('Telefone');

    expect(cpfInput).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();

    fireEvent.change(cpfInput, { target: { value: VALID_CPF_MOCK } });
    expect(cpfInput).toHaveValue('111.111.111-11');

    fireEvent.change(phoneNumberInput, { target: { value: VALID_PHONE_NUMBER_MOCK } });
    expect(phoneNumberInput).toHaveValue('(11)11111-1111');
  });

  it("Should show errors and not be able to submit.", async () => {
    render(
      <BrowserRouter>
        <CreateCustomerForm customerStatuses={ CUSTOMER_STATUSES_MOCK } />
      </BrowserRouter>
    );

    const createBtn = screen.getByRole('button', { name: 'Criar' });
    expect(createBtn).not.toBeDisabled();
    fireEvent.click(createBtn);

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

    expect(createBtn).toBeDisabled();
  });

  it("Should show an error with empty input but when filling in the error should disappear", async () => {
    render(
      <BrowserRouter>
        <CreateCustomerForm customerStatuses={ CUSTOMER_STATUSES_MOCK } />
      </BrowserRouter>
    );

    const createBtn = screen.getByRole('button', { name: 'Criar' });
    expect(createBtn).not.toBeDisabled();
    fireEvent.click(createBtn);

    await waitFor(() => {
      const spanErrorFullName = screen.getByText('Nome é obrigatório');
      expect(spanErrorFullName).toBeInTheDocument();
    });

    const fullNameInput = screen.getByPlaceholderText('Nome');
    expect(fullNameInput).toBeInTheDocument();

    fireEvent.change(fullNameInput, { target: { value: VALID_FULL_NAME_MOCK } });

    expect(fullNameInput).toHaveValue(VALID_FULL_NAME_MOCK);

    await waitFor(() => {
      expect(screen.queryByText(/Nome é obrigatório/i)).toBeNull();
    })
  });

  it("Should can create a customer.", async () => {
    render(
      <BrowserRouter>
        <CreateCustomerForm customerStatuses={ CUSTOMER_STATUSES_MOCK } />
      </BrowserRouter>
    );
    const createCustomerStub = jest.spyOn(CustomerService.prototype, 'createCustomer').mockResolvedValue(CUSTOMER_MOCK);

    const fullNameInput = screen.getByPlaceholderText('Nome');
    const emailInput = screen.getByPlaceholderText('E-mail');
    const cpfInput = screen.getByPlaceholderText('CPF');
    const phoneNumberInput = screen.getByPlaceholderText('Telefone');
    const selectInput = screen.getByRole('combobox');

    fireEvent.change(fullNameInput, { target: { value: VALID_FULL_NAME_MOCK } });
    fireEvent.change(emailInput, { target: { value: VALID_EMAIL_MOCK } });
    fireEvent.change(cpfInput, { target: { value: VALID_CPF_MOCK } });
    fireEvent.change(phoneNumberInput, { target: { value: VALID_PHONE_NUMBER_MOCK } });
    fireEvent.change(selectInput, { target: { value: '1' } });

    const createBtn = screen.getByRole('button', { name: 'Criar' });
    expect(createBtn).not.toBeDisabled();
    fireEvent.click(createBtn);

    await waitFor(() => {
      expect(createCustomerStub).toHaveBeenCalled();
    });

    expect(fullNameInput).toHaveValue('');
  });

  it("Should can not create a customer.", async () => {
    render(
      <BrowserRouter>
        <CreateCustomerForm customerStatuses={ CUSTOMER_STATUSES_MOCK } />
      </BrowserRouter>
    );
    const setErrorMock = jest.fn();
    const errorResponseMock = {
      response: {
        data: {
          message: 'Erro ao criar cliente'
        }
      }
    };
    jest.spyOn(CustomerService.prototype, 'createCustomer').mockRejectedValue(errorResponseMock);

    const fullNameInput = screen.getByPlaceholderText('Nome');
    const emailInput = screen.getByPlaceholderText('E-mail');
    const cpfInput = screen.getByPlaceholderText('CPF');
    const phoneNumberInput = screen.getByPlaceholderText('Telefone');
    const selectInput = screen.getByRole('combobox');

    fireEvent.change(fullNameInput, { target: { value: VALID_FULL_NAME_MOCK } });
    fireEvent.change(emailInput, { target: { value: INVALID_EMAIL_MOCK } });
    fireEvent.change(cpfInput, { target: { value: VALID_CPF_MOCK } });
    fireEvent.change(phoneNumberInput, { target: { value: VALID_PHONE_NUMBER_MOCK } });
    fireEvent.change(selectInput, { target: { value: '1' } });

    const createBtn = screen.getByRole('button', { name: 'Criar' });
    expect(createBtn).not.toBeDisabled();
    try {
      fireEvent.click(createBtn);
    } catch (error) {
      expect(setErrorMock).toHaveBeenCalled();
    }
  });
})
