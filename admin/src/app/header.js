import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image"
import logo from "./logo.png";

export default function header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">        
          <a className="navbar-brand" href="#">
          <Image src={logo} width="80" height="80"/>
            <p className="texto">Animalia</p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="./">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./funcionarios">
                  Funcionários
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Estoque
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Ração
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Roupa
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Brinquedo
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex ml-auto m-1" id="meuBotao" role="search">
              Cadastro
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
