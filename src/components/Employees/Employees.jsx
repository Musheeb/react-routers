import "./Employees.css";

import { Link, useLoaderData, Outlet } from "react-router-dom";

export default function Employees() {
  const userData = useLoaderData();
  return (
    <div className="employees__list--container">
      <div className="employees__list__header--container">
        <h1>Employees list page</h1>
        <Link to="/">Back to home</Link>
      </div>
      <div className="employees__list__details--container">
        <div className="employees__list__only--container">
          {userData.map((user) => {
            return (
              <Link key={user.id} to={`/employees/${user.id}`}>
                {user.name}
              </Link>
            );
          })}
        </div>
        <Outlet />
      </div>
    </div>
  );
}
