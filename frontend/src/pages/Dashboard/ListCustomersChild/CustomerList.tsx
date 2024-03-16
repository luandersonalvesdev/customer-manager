import { useEffect, useState } from "react";
import CustomerService from "../../../services/CustomerService";
import ICustomer from "../../../interfaces/ICustomer";
import CustomerCard from "../../../components/CustomerCard";
import LoadingSpinner from "../../../animations/LoadingSpinner";

export default function CustomerList() {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const service = new CustomerService();
    service.getAllCustomers()
      .then((response) => {
        setCustomers(response)
      })
      .catch(() => {
        setCustomers([])
      })
      .finally(() => {
        setIsLoading(false)
      });
  }, []);

  return (
    <div>
      {
        isLoading
          ? <LoadingSpinner className="border-uol-btn size-10"/>
          : (
            <ul>
              {
                customers.map((customer) => {
                  return <CustomerCard customer={customer} key={customer.id} />
                })
              }
            </ul>
          )
      }
      <p className="text-xs md:text-lg">Exibindo {customers.length} clientes</p>
    </div>
  )
}
