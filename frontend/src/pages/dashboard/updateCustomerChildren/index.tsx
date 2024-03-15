import CustomerUpdate from "../../../components/UpdateCustomer";

export default function UpdateCustomerChildren() {
  return (
    <div>
      <div>
        <p>Atualize o usuário</p>
        <p>Informe os campos a seguir para atualize o usuário:</p>
      </div>
      <CustomerUpdate />
    </div>
  )
}
