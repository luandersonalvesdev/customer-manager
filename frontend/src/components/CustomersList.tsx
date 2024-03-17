import ICustomer from "../interfaces/ICustomer";
import CustomerCard from "./CustomerCard";

export default function CustomersList({ customers } : { customers: ICustomer[] }) {

  return (
    <ul>
      {
        customers.map((customer) => {
          return <CustomerCard customer={customer} key={customer.id} />
        })
      }
    </ul>
  )
}