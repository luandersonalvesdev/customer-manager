import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DashboardPage from '../../pages/Dashboard';

describe("Unit - Dashboard Page", () => {
  it("Should render the Dashboard page", () => {
    render(<DashboardPage />);

    const customerLogo = screen.getByAltText('customer-logo');

    const dashboardTittle = screen.getByRole('heading', { level: 1, name: 'Painel de clientes' });

    expect(customerLogo).toBeInTheDocument();
    expect(dashboardTittle).toBeInTheDocument();
  });
})
