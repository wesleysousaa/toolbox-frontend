import React from 'react'
import "bootswatch/dist/simplex/bootstrap.min.css";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Menu = () => {

  const { singout, getUser } = useAuth();

  function exit() {
    singout();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ width: "100%" }}>
      <div className="container-fluid">
        <Link className="navbar-brand">
          <h1>Tool <span style={{ color: "#1b1b24", borderBottom: "solid 4px #1b1b24" }}>Box</span></h1>
        </Link>
        <div style={{ display: 'flex', justifyContent: 'center', marginRight: '1em' }}>
          <div className="collapse navbar-collapse" id="navbarColor03" >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/tool"}>Ferramenta</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/box"}>Caixa</Link>
              </li>
              {getUser() && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"} onClick={exit}>Sair</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menu