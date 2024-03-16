import CreateCustomer from "./CreateCustomer";

export default function CreateCustomerChildren() {
  return (
    <div>
      <div className="text-xs md:text-sm mb-5 md:mb-10">
        <p className="text-base md:text-xl">Novo usuário</p>
        <p>Informe os campos a seguir para criar novo usuário:</p>
      </div>
      <CreateCustomer />
    </div>
  )
}
