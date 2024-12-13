// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Error } from "./components/Error";

function App() {
  return (
    <>
      {<Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
