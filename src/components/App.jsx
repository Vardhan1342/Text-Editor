import React, { useState } from "react";
import Navbar from "./Navbar";
import TextArea from "./TextArea";
import About from "./About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  function modeOn() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextEditor" mode={mode} changeMode={modeOn} />
        <div className="container my-5">
          <Routes>
            <Route exact path="/" element={<TextArea mode={mode} />} />
 
            <Route exact path="/about" element={  <About mode={mode} />} />
            
            
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
