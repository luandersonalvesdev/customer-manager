import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect('/dashboard'),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
