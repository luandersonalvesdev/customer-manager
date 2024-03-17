import UpdateCustomerForm from "../../../components/forms/UpdateCustomerForm";
import CustomerStatusService from '../../../services/CustomerStatusService';
import { useEffect, useState } from "react";
import ICustomerStatus from "../../../interfaces/ICustomerStatus";
import ICustomer from "../../../interfaces/ICustomer";
import { useParams } from "react-router-dom";
import CustomerService from "../../../services/CustomerService";
import LoadingSpinner from "../../../animations/LoadingSpinner";

export default function UpdateCustomer() {
  const [customerStatuses, setCustomerStatuses] = useState<ICustomerStatus[]>([]);
  const [customer, setCustomer] = useState<ICustomer>({} as ICustomer);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { customerId } = useParams<{customerId: string}>();

  useEffect(() => {
    setIsLoading(true);
    const customerStatusService = new CustomerStatusService();

    customerStatusService.getAllCustomerStatuses()
      .then((response) => {
        setCustomerStatuses(response)
      })
      .catch(() => {
        setCustomerStatuses([])
      });

    const customerService = new CustomerService();

    customerService.getCustomerById(Number(customerId))
      .then((response) => {
        setCustomer(response);
      })
      .catch(() => {
        setCustomer({} as ICustomer)
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
            <UpdateCustomerForm customerStatuses={customerStatuses} customer={customer} />
          )
      }
    </div>
  )
}
