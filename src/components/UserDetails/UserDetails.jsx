import "./UserDetails.css";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { userId } = useParams();
  return (
    <div>
      <h1>User {userId}</h1>
    </div>
  );
}
