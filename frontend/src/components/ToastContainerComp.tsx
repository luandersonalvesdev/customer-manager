import { ToastContainer } from "react-toastify";

export default function ToastContainerComp() {
  return (
    <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition: Flip
      />
  )
}
