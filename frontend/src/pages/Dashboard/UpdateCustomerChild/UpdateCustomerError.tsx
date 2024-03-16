import { Link } from "react-router-dom";

export default function UpdateCustomerError() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>
        {'This customer doesn\'t exist. Please go back to the list '}
        <Link to="/dashboard">
          clicking here
        </Link>
      </p>
    </div>
  )
}
