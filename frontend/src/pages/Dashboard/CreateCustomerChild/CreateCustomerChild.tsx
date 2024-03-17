import CreateCustomer from "./CreateCustomer";

export default function CreateCustomerChild() {
  return (
    <div>
      <div className="text-xs md:text-sm mb-5 md:mb-10">
        <p className="text-base md:text-xl font-medium">Novo usuário</p>
        <p>Informe os campos a seguir para criar novo usuário:</p>
      </div>
      <CreateCustomer />
    </div>
  )
}
