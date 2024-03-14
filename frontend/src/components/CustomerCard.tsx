import ICustomer from "../interfaces/ICustomer";

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
        <p>{customer.cpf}</p>
        <p>{customer.phoneNumber}</p>
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
      </div>
    </li>
  )
}