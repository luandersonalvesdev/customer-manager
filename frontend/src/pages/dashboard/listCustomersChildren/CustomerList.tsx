import { useEffect, useState } from "react";
import CustomerService from "../../../services/CustomerService";
import ICustomer from "../../../interfaces/ICustomer";
import CustomerCard from "../../../components/CustomerCard";

export default function CustomerList() {
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  useEffect(() => {
    const service = new CustomerService();
    service.getAllCustomers()
      .then((response) => {
        setCustomers(response)
      })
      .catch(() => {
        setCustomers([])
      });
  }, []);

  return (
    <div>
      <ul>
        {
          customers.map((customer) => {
            return <CustomerCard customer={customer} key={customer.id} />
          })
        }
      </ul>
      <p className="text-xs md:text-lg">Exibindo {customers.length} clientes</p>
    </div>
  )
}
