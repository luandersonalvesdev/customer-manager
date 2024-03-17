import UpdateCustomerPanel from "./UpdateCustomerPanel";

export default function UpdateCustomerChild() {
  return (
    <div>
      <div className="text-xs md:text-sm mb-5 md:mb-10">
        <p className="text-base md:text-xl font-medium">Atualize o usuário</p>
        <p>Informe os campos a seguir para atualizar o usuário:</p>
      </div>
      <UpdateCustomerPanel />
    </div>
  )
}
