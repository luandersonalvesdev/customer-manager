import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ListCustomersChild from '../../pages/Dashboard/ListCustomersChild/ListCustomersChild';
import { BrowserRouter } from "react-router-dom";


describe("Unit - List Customer Child", () => {
  it("Should render the List customer Child", () => {
    render(
      <BrowserRouter>
        <ListCustomersChild />
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
