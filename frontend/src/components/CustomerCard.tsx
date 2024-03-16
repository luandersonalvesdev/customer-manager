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
    <li className="customer-card">
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
        className="link-empty px-3 md:px-10"
        to={`/dashboard/update-customer/${customer.id}`}
      >
        Editar
      </Link>
    </li>
  )
}
