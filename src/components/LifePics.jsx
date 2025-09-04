import { Link } from "react-router-dom"; // ✅ Import Link
import civilianPic from "../assets/civilian.jpg";
import militaryPic from "../assets/military.jpg";
import "./LifePics.css";

function LifePics() {
  return (
    <section id="life-pics" className="split-section">
      {/* Left Side - Civilian Life */}
      <Link to="/civilian" className="split left">
        <img src={civilianPic} alt="Civilian Life" />
        <div className="overlay-text">Civilian Life</div>
      </Link>

      {/* Right Side - Military Life */}
      <Link to="/military" className="split right">
        <img src={militaryPic} alt="Military Life" />
        <div className="overlay-text">Military Life</div>
      </Link>

      {/* Center Content */}
      <div className="center-content">
        <h1>My Life Journey</h1>
        <h4>From civilian life to serving in the military, each side represents who I am.</h4>
      </div>

      {/* <div className="nav-columns">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div> */}

      {/* Navbar Columns */}
      <div className="nav-columns">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </section>
  );
}

export default LifePics;