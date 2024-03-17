import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CustomersList from '../../components/CustomersList';
import { BrowserRouter } from "react-router-dom";
import { CUSTOMERS_LIST_MOCK } from "../mocks/customer.mock";

describe("Unit - Customers List Component", () => {
  it("Should render the customers list passed to it", () => {
    render(
      <BrowserRouter>
        <CustomersList customers={CUSTOMERS_LIST_MOCK}/>
      </BrowserRouter>
    );

    const customerNameText = screen.getByText('Jorel');
    const customerEmailText = screen.getByText('jorel@email.com');
    const customerCpfText = screen.getByText('111.111.111-11');
    const customerPhoneNumberText = screen.getByText('(11) 11111-1111');
    const statusText = screen.getByText('Ativo');

    expect(customerNameText).toBeInTheDocument();
    expect(customerEmailText).toBeInTheDocument();
    expect(customerCpfText).toBeInTheDocument();
    expect(customerPhoneNumberText).toBeInTheDocument();
    expect(statusText).toBeInTheDocument();

    const customerNameText2 = screen.getByText('Lara');
    const customerEmailText2 = screen.getByText('lara@email.com');
    const customerCpfText2 = screen.getByText('222.222.222-22');
    const customerPhoneNumberText2 = screen.getByText('(22) 22222-2222');
    const statusText2 = screen.getByText('Inativo');

    expect(customerNameText2).toBeInTheDocument();
    expect(customerEmailText2).toBeInTheDocument();
    expect(customerCpfText2).toBeInTheDocument();
    expect(customerPhoneNumberText2).toBeInTheDocument();
    expect(statusText2).toBeInTheDocument();

    const editLinks = screen.getAllByRole('link', { name: 'Editar' });

    expect(editLinks).toHaveLength(2);
  });
})
