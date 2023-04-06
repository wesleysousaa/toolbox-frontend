import styles from "./App.module.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Components
import Menu from "./Components/Menu/Menu";

// Pages
import Home from "./Pages/Home/Home";
import Box from "./Pages/Box/Box";
import Tool from "./Pages/Tool/Tool";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/box' element={<Box />}/>
        <Route path='/tool' element={<Tool />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
