import { Link } from "react-router-dom";
import ICustomer from "../interfaces/ICustomer";
import { formatPhoneNumber, formatCPF } from "../utils/formatters";

export default function CustomerCard({ customer }: { customer: ICustomer }) {
  const getStatusColor = (statusId: number): string => {
    const statusColors: { [key: number]: string } = {
      1: 'bg-green-600',
      2: 'bg-red-600',
      3: 'bg-yellow-600',
      4: 'bg-gray-300',
    };

    return statusColors[statusId] || 'bg-black';
  };

  return (
    <li className="flex justify-between items-center border border-gray-300 mb-3 px-3 md:px-7 py-1.5 md:py-3 text-xss md:text-base">
      <div className="flex-1">
        <p className="font-medium">{customer.fullName}</p>
        <p>{customer.email}</p>
      </div>
      <div className="flex-1">
        <p>{formatCPF(customer.cpf)}</p>
        <p>{formatPhoneNumber(customer.phoneNumber)}</p>
      </div>
      <div className="flex flex-1 items-center gap-1">
        <hr className={`${getStatusColor(customer.status.id)} size-1 md:size-3  rounded-full`}></hr>
        <p>{customer.status.name}</p>
      </div>
      <Link
        className="bg-transparent border text-uol-btn border-uol-btn h-full text-center px-1 md:px-5 py-1 md:py-1.5 rounded hover:brightness-110 hover:text-white hover:bg-uol-btn duration-300"
        to={`/dashboard/update-customer/${customer.id}`}
      >
        Editar
      </Link>
    </li>
  )
}
