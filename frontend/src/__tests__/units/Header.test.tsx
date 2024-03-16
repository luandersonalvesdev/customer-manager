import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe("Header", () => {
  it("Render the header", () => {
    render(<Header />);

    const uolLogo = screen.getByAltText('uol-logo');

		expect(uolLogo).toBeInTheDocument();
  });
})
