import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import UpdateCustomerError from '../../pages/Dashboard/UpdateCustomerChild/UpdateCustomerError';
import { BrowserRouter } from 'react-router-dom';

describe("Header", () => {
  it("Render the header", () => {
    render(
      <BrowserRouter>
        <UpdateCustomerError />
      </BrowserRouter>
    );

    const oopsText = screen.getByText('Oops!');
    const goBackLink = screen.getByRole('link', { name: /clicking here/i });
    const warningText = screen.getByText(/This customer doesn't exist. Please go back to the list/i);

		expect(oopsText).toBeInTheDocument();
		expect(goBackLink).toBeInTheDocument();
		expect(warningText).toBeInTheDocument();

    fireEvent.click(goBackLink);

    expect(window.location.pathname).toBe('/dashboard');
  });
})
