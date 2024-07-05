// import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Products";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (type, msg) => {
    setAlert({
      message: msg,
      type: type,
    }); 
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  let toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setText("Enable Dark Mode");
      showAlert("success", "Light Mode Enabled Successfully");
      document.title = "light mode is active";
      setTimeout(() => {
        document.title = "we miss you";
      }, 3000);
    } else {
      setMode("dark");
      setText("Enable Light Mode");
      showAlert("success", "Dark Mode Enabled Successfully");
      document.title = "dark mode is active";
      setTimeout(() => {
        document.title = "we miss you";
      }, 3000);
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar title="NEXA" aboutText='AboutNexa'/> */}
      <BrowserRouter>
        <Navbar
          title="NEXA"
          aboutText="aboutNexa"
          mode={mode}
          toggleMode={toggleMode}
          text={text}
        />
        <Alert alert={alert} />
        <div className="conatainer">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="LET'S rock the world"/>} />
            <Route exact path="/products" element={<Product />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
