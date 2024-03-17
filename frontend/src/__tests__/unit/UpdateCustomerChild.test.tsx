import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UpdateCustomerChild from '../../pages/Dashboard/UpdateCustomerChild';
import { BrowserRouter } from "react-router-dom";


describe.only("Unit - Update Customer Child", () => {
  it("Should render the Update Customer Child", () => {
    render(
      <BrowserRouter>
        <UpdateCustomerChild />
      </BrowserRouter>
    );

    const updateUserText = screen.getByText('Atualize o usuário');
    const infoText = screen.getByText('Informe os campos a seguir para atualizar o usuário:');

    expect(updateUserText).toBeInTheDocument();
    expect(infoText).toBeInTheDocument();
  });
})
