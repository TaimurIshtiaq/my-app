import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Field from "./components/Field";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Field />
    </React.Fragment>
  );
}

export default App;
