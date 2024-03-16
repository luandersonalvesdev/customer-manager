import { Link } from "react-router-dom";
import CustomerList from "./CustomerList";

export default function ListCustomersChildren() {
  return (
    <div>
      <div className="flex justify-between mb-5 md:mb-10 gap-2 text-xs md:text-sm">
        <div>
          <p className="text-base md:text-xl">Listagem de usuários</p>
          <p>Escolha um cliente para visualizar os detalhes</p>
        </div>
        <Link
          className="bg-uol-btn text-white h-full text-center px-1 md:px-3 py-1.5 rounded hover:brightness-110 duration-300"
          to="/dashboard/create-customer"
        >
          Novo cliente
        </Link>
      </div>
      <CustomerList />
    </div>
  )
}
