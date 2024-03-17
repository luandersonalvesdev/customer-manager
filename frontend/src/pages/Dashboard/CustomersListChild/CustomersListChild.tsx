import { Link } from "react-router-dom";
import CustomerListPanel from "./CustomersListPanel";

export default function CustomerListChild() {
  return (
    <div>
      <div className="flex justify-between mb-5 md:mb-10 gap-2 text-xs md:text-base">
        <div>
          <p className="font-medium text-base md:text-xl">Listagem de usuários</p>
          <p>Escolha um cliente para visualizar os detalhes</p>
        </div>
        <Link
          className="link-full"
          to="/dashboard/create-customer"
        >
          Novo cliente
        </Link>
      </div>
      <CustomerListPanel />
    </div>
  )
}
