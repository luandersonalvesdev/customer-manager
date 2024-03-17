import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorPage from '../../../pages/Error/ErrorPage';
import { BrowserRouter } from 'react-router-dom';

describe("Unit - Error Page", () => {
  it("Should render the error page", () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );

    const oopsText = screen.getByText('Oops!');
    const goBackLink = screen.getByRole('link', { name: /clicking here/i });
    const warningText = screen.getByText(/It looks like you got lost but don't worry, get back to the route by/i);

		expect(oopsText).toBeInTheDocument();
		expect(goBackLink).toBeInTheDocument();
		expect(warningText).toBeInTheDocument();

    fireEvent.click(goBackLink);

    expect(window.location.pathname).toBe('/dashboard');
  });
})
