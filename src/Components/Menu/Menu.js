import React from 'react'
import "bootswatch/dist/simplex/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{width: "100%"}}>
      <div class="container-fluid">
        <Link class="navbar-brand">
          <h1>Tool <span style={{color: "#1b1b24", borderBottom: "solid 4px #1b1b24"}}>Box</span></h1>
        </Link>
        <div style={{ display: 'flex', justifyContent: 'center', marginRight: '1em' }}>
          <div class="collapse navbar-collapse" id="navbarColor03" >
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <Link class="nav-link" to={"/"}>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/tool"}>Ferramenta</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/box"}>Caixa</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/login"}>Sair</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menu