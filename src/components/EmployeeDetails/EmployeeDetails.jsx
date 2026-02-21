import "./EmployeeDetails.css";
import { useLoaderData } from "react-router-dom";

export default function EmployeeDetails() {
  const userDetails = useLoaderData();
  return (
    <div className="employee__details--container">
      <div className="employee__details__data--container">
        <p>Username - {userDetails.name}</p>
        <p>Phone Number - {userDetails.phone}</p>
        <p>Website - {userDetails.website}</p>
        <p>
          Address - {userDetails.address.street}, {userDetails.address.suite},{" "}
          {userDetails.address.city}. {userDetails.address.zipcode}
        </p>
      </div>
    </div>
  );
}
