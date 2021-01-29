import React from "react";
import "./styles/App.css";
import { Navbar } from "./components";
import { BodyContainer } from "./containers";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BodyContainer />
    </div>
  );
}

export default App;
