import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe("Unit - Header", () => {
  it("Should render the header", () => {
    render(<Header />);

    const uolLogo = screen.getByAltText('uol-logo');

		expect(uolLogo).toBeInTheDocument();
  });
})
