import CreateCustomerForm from "./CreateCustomerForm";
import CustomerStatusService from '../services/CustomerStatusService';
import { useEffect, useState } from "react";
import ICustomerStatus from "../interfaces/ICustomerStatus";

export default function CustomerCreate() {
  const [customerStatuses, setCustomerStatuses] = useState<ICustomerStatus[]>([]);

  useEffect(() => {
    const service = new CustomerStatusService();

    service.getAllCustomerStatuses()
      .then((response) => {
        setCustomerStatuses(response)
      })
      .catch(() => {
        setCustomerStatuses([])
      })
  }, []);

  return (
    <div>
      <CreateCustomerForm customerStatuses={customerStatuses}/>
    </div>
  )
}
