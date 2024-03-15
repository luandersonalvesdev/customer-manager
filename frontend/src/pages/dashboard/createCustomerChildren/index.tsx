import CustomerCreate from "../../../components/CreateCustomer";

export default function CreateCustomerChildren() {
  return (
    <div>
      <div>
        <p>Novo usuário</p>
        <p>Informe os campos a seguir para criar novo usuário:</p>
      </div>
      <CustomerCreate />
    </div>
  )
}
