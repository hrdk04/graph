import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

function App() {

  const linkStyle = ({ isActive }) => ({
    margin: "10px",
    textDecoration: "none",
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal"
  });

  return (
    <BrowserRouter>

      <h1>React Router Example</h1>

      <nav>

        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>

        <NavLink to="/contact" style={linkStyle}>
          Contact
        </NavLink>

      </nav>

      <hr />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;