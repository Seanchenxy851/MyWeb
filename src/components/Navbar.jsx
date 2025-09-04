import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/military">Military</Link>
    </div>
  );
}

export default Navbar;