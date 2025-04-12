import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "./Logo";

const links = [
  { name: "Home", path: "/" },
  { name: "Sobre mim", path: "/sobremim" },
  { name: "Projetos", path: "/projetos" },
  { name: "Contato", path: "/contato" },
];

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className={`${styles.container} navbar navbar-expand-lg py-4`}>
      <div className="container-fluid mx-lg-5 px-lg-5">
        {/* Logo e Toggler alinhados à esquerda */}
        <div className="d-flex align-items-center mx-auto gap-md-5">
          <h1 className="m-0">
            <Logo />
          </h1>
          <button
            className="navbar-toggler p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon ${styles.menuHamburguer}`}>
              <i class="bi bi-list" />
            </span>
          </button>
        </div>

        {/* Links alinhados à direita */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3 gap-lg-5">
            {links.map((link) => (
              <li key={link.name} className="nav-item">
                <Link
                  to={link.path}
                  className={`${styles.link}  nav-link ${
                    location.pathname === link.path ? "nav-link active" : ""
                  }`}
                  aria-current={
                    location.pathname === link.path ? "page" : undefined
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
