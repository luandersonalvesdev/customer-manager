import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from "react-router-dom";
import ErrorPage from './pages/error/index.tsx';
import DashboardPage from './pages/dashboard/';
import CreateCustomerChildren from './pages/dashboard/createCustomerChildren';
import ListCustomersChildren from './pages/dashboard/listCustomersChildren'
import UpdateCustomerChildren from './pages/dashboard/updateCustomerChildren/index.tsx';
import './index.css'

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
        element: <UpdateCustomerChildren />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
