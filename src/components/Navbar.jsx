import { useState } from "react";
import Reactlogo from "../assets/react.svg";

function NavBar({ name, roll }) {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={
        darkMode
          ? "bg-dark text-light min-vh-100"
          : "bg-light text-dark min-vh-100"
      }
    >
      {/* Animated Navbar */}
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "navbar-dark bg-dark" : "navbar-dark bg-primary"
        } px-4 animate__animated animate__fadeIn`}
        style={{ transition: "all 0.5s ease" }}
      >
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={Reactlogo} alt="React Logo" width="40" className="me-2" />
          React Counter
        </a>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <button
            onClick={toggleTheme}
            className="btn btn-outline-light d-flex align-items-center gap-2"
            style={{ transition: "all 0.3s ease" }}
            aria-label="toggle theme"
            data-testid="theme-toggle"
          >
            <span
              className={`animate__animated ${
                darkMode ? "animate__fadeInDown" : "animate__fadeInUp"
              }`}
              style={{ fontSize: "1.3rem" }}
              role="img"
              aria-label={darkMode ? "sun" : "moon"}
            >
              {darkMode ? "🌞" : "🌙"}
            </span>
            <span className="d-none d-sm-inline">
              {darkMode ? "Light" : "Dark"}
            </span>
          </button>
        </div>
      </nav>

      {/* Main content */}
      <div
        className={`container mt-5 p-4 rounded shadow-sm animate__animated animate__fadeIn ${
          darkMode ? "bg-secondary text-light" : "bg-white text-dark"
        }`}
      >
        <h2 className="mb-3">
          Welcome, <span className="text-info">{name}</span> 👋
        </h2>
        <p>
          Your Roll Number is <strong>{roll}</strong>
        </p>
        <p className="fs-5">
          You clicked <strong>{count}</strong> time{count !== 1 && "s"}.
        </p>

        <div className="d-flex flex-wrap gap-3 mt-3">
          <button
            className="btn btn-success"
            onClick={() => setCount(count + 1)}
          >
            +1 Click
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setCount(count - 1)}
          >
            -1 Click
          </button>
          <button className="btn btn-dark" onClick={() => setCount(count + 2)}>
            +2 Click
          </button>
          <button
            className="btn btn-info text-white"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
