import { useEffect, useState } from "react";
import CustomerService from "../../../services/CustomerService";
import ICustomer from "../../../interfaces/ICustomer";
import LoadingSpinner from "../../../animations/LoadingSpinner";
import CustomersList from "../../../components/CustomersList";

export default function CustomerListPanel() {
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
          ? <LoadingSpinner className="border-uol-btn size-10 md:size-20"/>
          : (
            <CustomersList customers={customers} />
          )
      }
      <p className="text-xs md:text-lg">Exibindo {customers.length} clientes</p>
    </div>
  )
}
