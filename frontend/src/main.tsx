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

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect('/dashboard/list'),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        path: "/dashboard/list",
        element: <ListCustomersChildren />
      },
      {
        path: "/dashboard/create-customer",
        element: <CreateCustomerChildren />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
