import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CustomerCard from '../../../components/CustomerCard';
import { BrowserRouter } from "react-router-dom";
import { CUSTOMER_MOCK, CUSTOMERS_WITHOUT_STATUS_MOCK } from "../../mocks/customer.mock";

describe("Unit - Customer Card Component", () => {
  it("Should render the customer passed to it", () => {
    render(
      <BrowserRouter>
        <CustomerCard customer={CUSTOMER_MOCK}/>
      </BrowserRouter>
    );

    const customerNameText = screen.getByText('Jorel');
    const customerEmailText = screen.getByText('jorel@email.com');
    const customerCpfText = screen.getByText('111.111.111-11');
    const customerPhoneNumberText = screen.getByText('(11) 11111-1111');
    const statusText = screen.getByText('Ativo');
    const editLink = screen.getByRole('link', { name: 'Editar' });

    expect(customerNameText).toBeInTheDocument();
    expect(customerEmailText).toBeInTheDocument();
    expect(customerCpfText).toBeInTheDocument();
    expect(customerPhoneNumberText).toBeInTheDocument();
    expect(statusText).toBeInTheDocument();
    expect(editLink).toBeInTheDocument();
  });

  it("Should render the customer without status", () => {
    render(
      <BrowserRouter>
        <CustomerCard customer={CUSTOMERS_WITHOUT_STATUS_MOCK}/>
      </BrowserRouter>
    );

    const customerNameText = screen.getByText('Jorel');
    const customerEmailText = screen.getByText('jorel@email.com');
    const customerCpfText = screen.getByText('111.111.111-11');
    const customerPhoneNumberText = screen.getByText('(11) 11111-1111');
    const statusText = screen.getByText('Inválido');
    const editLink = screen.getByRole('link', { name: 'Editar' });

    expect(customerNameText).toBeInTheDocument();
    expect(customerEmailText).toBeInTheDocument();
    expect(customerCpfText).toBeInTheDocument();
    expect(customerPhoneNumberText).toBeInTheDocument();
    expect(statusText).toBeInTheDocument();
    expect(editLink).toBeInTheDocument();
  });
})
