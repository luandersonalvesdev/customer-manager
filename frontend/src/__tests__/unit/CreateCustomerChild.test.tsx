import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CreateCustomerChild from '../../pages/Dashboard/CreateCustomerChild/CreateCustomerChild';
import { BrowserRouter } from "react-router-dom";


describe("Unit - Create Customer Child", () => {
  it("Should render the Create Customer Child", () => {
    render(
      <BrowserRouter>
        <CreateCustomerChild />
      </BrowserRouter>
    );

    const newUserText = screen.getByText('Novo usuário');
    const infoText = screen.getByText('Informe os campos a seguir para criar novo usuário:');

    expect(newUserText).toBeInTheDocument();
    expect(infoText).toBeInTheDocument();
  });
})
