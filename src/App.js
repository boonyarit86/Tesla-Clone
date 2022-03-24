import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { stateContext, useStateContext } from "./context/index";

function App() {
  const { isBackdropOpen, handleBackdrop } = useStateContext();

  return (
    <div className="App">
      <stateContext.Provider value={{isBackdropOpen, handleBackdrop}}>
        <Header />
        <Home />
        {isBackdropOpen && <div className="backdrop" onClick={handleBackdrop}></div>}
      </stateContext.Provider>
    </div>
  );
}

export default App;
