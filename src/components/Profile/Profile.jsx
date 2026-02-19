import "./Profile.css";

import { useParams } from "react-router-dom";

export default function Profile() {
  const { profileId } = useParams();
  return (
    <div>
      <h1>Profile {profileId}</h1>
    </div>
  );
}
