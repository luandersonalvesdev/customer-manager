import { Link } from "react-router-dom";

export default function CreateCustomerChildren() {
  return (
    <div>
      <div>
        <p>Novo usuário</p>
        <p>Informe os campos a seguir para criar novo usuário:</p>
      </div>
      <Link to="/dashboard/list">Voltar</Link>
    </div>
  )
}
