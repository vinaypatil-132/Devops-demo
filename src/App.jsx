import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/Navbar.jsx";
import "animate.css"

function App() {
  return (
    <>
      <div className="bg-light min-vh-100">
        <NavBar name="Vinay Patil" roll="CS20-132" />
      </div>
    </>
  );
}

export default App;
