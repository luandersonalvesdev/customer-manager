import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CustomerListChild from '../../pages/Dashboard/CustomersListChild/CustomersListChild';
import { BrowserRouter } from "react-router-dom";


describe("Unit - Customers list Child", () => {
  it("Should render the Customers list Child", () => {
    render(
      <BrowserRouter>
        <CustomerListChild />
      </BrowserRouter>
    );

    const listOfUsersText = screen.getByText('Listagem de usuários');
    const createNewUserLink = screen.getByRole('link', { name: 'Novo cliente' });
    const listLengthText = screen.getByText('Exibindo 0 clientes');

    expect(listOfUsersText).toBeInTheDocument();
    expect(createNewUserLink).toBeInTheDocument();
    expect(listLengthText).toBeInTheDocument();
  });
})
