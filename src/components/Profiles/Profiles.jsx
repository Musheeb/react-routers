import "./Profiles.css";
import Profile from "../Profile/Profile.jsx";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Profiles() {
  return (
    <div>
      <h1>Profiles Page</h1>
      {numbers.map((user) => {
        return <Profile key={user} user={user} />;
      })}
    </div>
  );
}
