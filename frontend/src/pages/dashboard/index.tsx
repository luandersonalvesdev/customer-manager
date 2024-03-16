import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function DashboardPage() {
  return (
    <main className="flex flex-col w-full mb-10 md:mb-20">
      <Header />
      <div className="max-w-screen-lg mt-10 md:mt-20 px-5 self-center w-full">
        <div className="flex items-end mb-5 md:mb-10 text-xl md:text-3xl font-medium">
          <img
            className="h-7 md:h-10 mr-4 md:mr-7"
            src="../../../public/customer.svg"
            alt="customer-logo"
          />
          <h1>Painel de clientes</h1>
        </div>
        <hr className="w-full h-0.5 bg-gray-400 md:mb-10 mb-5"></hr>
        <Outlet />
      </div>
    </main>
  )
}
