import CreateCustomerForm from "../../../components/forms/CreateCustomerForm";
import CustomerStatusService from '../../../services/CustomerStatusService';
import { useEffect, useState } from "react";
import ICustomerStatus from "../../../interfaces/ICustomerStatus";
import LoadingSpinner from "../../../animations/LoadingSpinner";

export default function CreateCustomerPanel() {
  const [customerStatuses, setCustomerStatuses] = useState<ICustomerStatus[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const service = new CustomerStatusService();

    service.getAllCustomerStatuses()
      .then((response) => {
        setCustomerStatuses(response)
      })
      .catch(() => {
        setCustomerStatuses([])
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
            <CreateCustomerForm customerStatuses={customerStatuses}/>
          )
      }
    </div>
  )
}
