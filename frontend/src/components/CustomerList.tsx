import { useEffect, useState } from "react";
import CustomerService from "../services/CustomerService";
import ICustomer from "../interfaces/ICustomer";
import CustomerCard from "./CustomerCard";

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
    <ul>
      {
        customers.map((customer) => {
          return <CustomerCard customer={customer} key={customer.id} />
        })
      }
    </ul>
  )
}