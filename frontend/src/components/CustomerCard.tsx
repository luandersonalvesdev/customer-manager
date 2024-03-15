import { Link } from "react-router-dom";
import ICustomer from "../interfaces/ICustomer";
import { formatPhoneNumber, formatCPF } from "../utils/formatters";

export default function CustomerCard({ customer }: { customer: ICustomer }) {
  const getStatusColor = (statusId: number): string => {
    const statusColors: { [key: number]: string } = {
      1: 'green',
      2: 'red',
      3: 'yellow',
      4: 'gray',
    };

    return statusColors[statusId] || 'black';
  };

  return (
    <li>
      <div>
        <p>{customer.fullName}</p>
        <p>{customer.email}</p>
      </div>
      <div>
        <p>{formatCPF(customer.cpf)}</p>
        <p>{formatPhoneNumber(customer.phoneNumber)}</p>
      </div>
      <div>
        <div
          style={
            {
              backgroundColor: getStatusColor(customer.status.id),
              width: '10px',
              height: '10px',
              borderRadius: '50%'
            }
          }></div>
          <p>{customer.status.name}</p>
        <Link to={`/dashboard/update-customer/${customer.id}`}>Editar</Link>
      </div>
    </li>
  )
}
