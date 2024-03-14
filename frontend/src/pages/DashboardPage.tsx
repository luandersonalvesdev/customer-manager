import { Link } from "react-router-dom";
import Header from "../components/Header";
import CustomerList from "../components/CustomerList";

export default function DashboardPage() {
  return (
    <main>
      <Header />
      <h1>Painel de clientes</h1>
      <div>
        <div>
          <p>Listagem de usuários</p>
          <p>Escolha um cliente para visualizar os detalhes</p>
        </div>
        <Link to="/dashboard/create">Novo cliente</Link>
      </div>
      <CustomerList />
    </main>
  )
}
