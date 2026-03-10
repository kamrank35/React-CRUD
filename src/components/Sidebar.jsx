import { Link } from "react-router-dom";

function Sidebar() {
  
  return (
    <div className="d-flex d-none d-md-block">
    <div
      className="bg-dark text-white p-3"
      style={{
        width: "220px",
        height: "100vh",
        position: "fixed",
        top: "56px",
        left: "0"
      }}
    >
      <h4>Menu</h4>

      <ul className="nav flex-column">

        <li className="nav-item">
          <Link className="nav-link text-white" to="/">Dashboard</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/add-item">Add Item</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/items">Item List</Link>
        </li>

      </ul>
    </div>
    </div>
  );
}

export default Sidebar;