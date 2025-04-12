import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.conteudo}>
        <h2>
          Olá, eu sou <span className={styles.nome}>Vera Perazza</span>
        </h2>
        <h3 id="typing-text">Desenvolvedora Front-end</h3>
        <div className={styles.containerBorda}>
          <div className={styles.gradientBorder}>
            <span>
              <Link className={styles.link} to="/projetos">
                Ver projetos
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
