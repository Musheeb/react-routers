import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app--container">
      <h1>This is App.jsx</h1>
      <Link to="/users">Users List</Link>
      <Link to="/employees">Employees List</Link>
    </div>
  );
}

export default App;
