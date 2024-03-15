import CreateCustomer from "./CreateCustomer";

export default function CreateCustomerChildren() {
  return (
    <div>
      <div>
        <p>Novo usuário</p>
        <p>Informe os campos a seguir para criar novo usuário:</p>
      </div>
      <CreateCustomer />
    </div>
  )
}
