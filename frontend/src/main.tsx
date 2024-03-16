import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from "react-router-dom";
import ErrorPage from './pages/Error';
import DashboardPage from './pages/Dashboard/';
import CreateCustomerChildren from './pages/Dashboard/CreateCustomerChild/';
import ListCustomersChildren from './pages/Dashboard/ListCustomersChild/'
import UpdateCustomerChildren from './pages/Dashboard/UpdateCustomerChild/';
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import UpdateCustomerError from './pages/Dashboard/UpdateCustomerChild/UpdateCustomerError';

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
        element: <ListCustomersChildren />
      },
      {
        path: "/dashboard/create-customer",
        element: <CreateCustomerChildren />
      },
      {
        path: "/dashboard/update-customer/:customerId",
        element: <UpdateCustomerChildren />,
        errorElement: <UpdateCustomerError />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
