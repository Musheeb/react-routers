import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>This is App.jsx</h1>
      <Link to="/users">Users List</Link>
    </div>
  );
}

export default App;
