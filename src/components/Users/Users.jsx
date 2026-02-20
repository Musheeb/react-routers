import "./Users.css";
import { Link, Outlet } from "react-router-dom";

const users = [1, 2, 3, 4, 5];

export default function Users() {
  return (
    <div className="users__and__user__details--container">
      <div className="users__list--container">
        {users.map((user) => {
          return (
            <Link key={user} to={`/users/${user}`}>
              User {user}
            </Link>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}
