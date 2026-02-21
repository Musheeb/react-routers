import "./Error.css";

import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error__404--container">
      <p style={{ fontWeight: "bold" }}>
        404 Not Found - You are not supposed to be here 😅
      </p>
      <Link to="/">Back to home</Link>
      <Link to="/employees">Employees List</Link>
    </div>
  );
}
