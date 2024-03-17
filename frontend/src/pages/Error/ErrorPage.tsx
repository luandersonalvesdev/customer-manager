import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>
        {'It looks like you got lost but don\'t worry, get back to the route by '}
        <Link to="/dashboard">
          clicking here
        </Link>
      </p>
    </div>
  )
}
