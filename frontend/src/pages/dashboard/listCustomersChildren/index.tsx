import { Link } from "react-router-dom";
import CustomerList from "./CustomerList";

export default function ListCustomersChildren() {
  return (
    <div>
      <div>
        <p>Listagem de usuários</p>
        <p>Escolha um cliente para visualizar os detalhes</p>
      </div>
      <Link to="/dashboard/create-customer">Novo cliente</Link>
      <CustomerList />
    </div>
  )
}
