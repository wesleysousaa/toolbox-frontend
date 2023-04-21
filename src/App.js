import styles from "./App.module.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Components
import Menu from "./Components/Menu/Menu";

// Pages
import Home from "./Pages/Home/Home";
import Box from "./Pages/Box/Box";
import Tool from "./Pages/Tool/Tool";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import useAuth from './Hooks/useAuth';
import { Navigate } from "react-router-dom";

function App() {

  const { getUser } = useAuth();

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={getUser() ? <Home /> : <Navigate to={"/login"} />} />
          <Route path='/box' element={getUser() ? <Box /> : <Navigate to={"/login"} />} />
          <Route path='/tool' element={getUser() ? <Tool /> : <Navigate to={"/login"} />} />
          <Route path='/login' element={!getUser() ? <Login /> : <Navigate to={"/"} />} />
          <Route path='/register' element={!getUser() ? <Register /> : <Navigate to={"/"} />} />
          <Route path='/*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
