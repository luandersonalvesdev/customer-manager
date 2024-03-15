import CustomerCreate from "../../../components/CustomerCreate";

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
