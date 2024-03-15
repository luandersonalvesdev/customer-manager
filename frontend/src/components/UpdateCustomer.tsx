import UpdateCustomerForm from "./UpdateCustomerForm";
import CustomerStatusService from '../services/CustomerStatusService';
import { useEffect, useState } from "react";
import ICustomerStatus from "../interfaces/ICustomerStatus";
import ICustomer from "../interfaces/ICustomer";
import { useParams } from "react-router-dom";
import CustomerService from "../services/CustomerService";

export default function CustomerUpdate() {
  const [customerStatuses, setCustomerStatuses] = useState<ICustomerStatus[]>([]);
  const [customer, setCustomer] = useState<ICustomer>({} as ICustomer);
  const { customerId } = useParams<{customerId: string}>();

  useEffect(() => {
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
  }, []);

  return (
    <div>
      <UpdateCustomerForm customerStatuses={customerStatuses} customer={customer} />
    </div>
  )
}
