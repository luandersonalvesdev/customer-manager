import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from "react-router-dom";
import ErrorPage from './pages/Error/ErrorPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import CreateCustomerChild from './pages/Dashboard/CreateCustomerChild/CreateCustomerChild';
import CustomerListChild from './pages/Dashboard/CustomersListChild/CustomersListChild'
import UpdateCustomerChild from './pages/Dashboard/UpdateCustomerChild/UpdateCustomerChild';
import UpdateCustomerError from './pages/Dashboard/UpdateCustomerChild/UpdateCustomerError';
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect('/dashboard'),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        path: "/dashboard/",
        element: <CustomerListChild />
      },
      {
        path: "/dashboard/create-customer",
        element: <CreateCustomerChild />
      },
      {
        path: "/dashboard/update-customer/:customerId",
        element: <UpdateCustomerChild />,
        errorElement: <UpdateCustomerError />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
