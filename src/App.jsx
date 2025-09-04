import "./App.css";
import { Routes, Route } from "react-router-dom";
import LifePics from "./components/LifePics";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Military from "./pages/Military";
import Civilian from "./pages/Civilian";

function App() {
  return (
    <div className="App">
      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<LifePics />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/military" element={<Military />} />
        <Route path="/civilian" element={<Civilian />} />
      </Routes>
    </div>
  );
}

export default App;