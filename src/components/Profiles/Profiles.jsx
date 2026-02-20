import "./Profiles.css";
import Profile from "../Profile/Profile.jsx";

import { Link, Outlet } from "react-router-dom";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Profiles() {
  return (
    <div className="profile-page-container">
      <div className="profile-container">
        {numbers.map((num) => {
          return (
            <Link key={num} to={`/profiles/${num}`}>
              Profile {num}
            </Link>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}
