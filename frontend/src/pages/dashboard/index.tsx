import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function DashboardPage() {
  return (
    <main>
      <Header />
      <h1>Painel de clientes</h1>
      <Outlet />
    </main>
  )
}
