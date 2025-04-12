import { Link } from "react-router-dom";
import styles from "./SobreMim.module.css";

export default function SobreMim() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.titulo}>
          <span className={styles.destaque}>/</span>sobre_mim
        </h1>
        <div className={styles.linha}></div>
      </div>

      <div className={styles.conteudo}>
        <div className={styles.colunaFoto}>
          <div className={styles.fotoContainer}>
            <div className={styles.foto}></div>
            <div className={styles.bordaAnimada}></div>
          </div>
        </div>

        <div className={styles.colunaTexto}>
          <h2 className={styles.subtitulo}>
            Olá, eu sou{" "}
            <span className={styles.nomeDestaque}>Vera Perazza</span>
          </h2>

          <div className={styles.bio}>
            <p>
              Desenvolvedora Front-End apaixonada por criar interfaces digitais
              funcionais e visualmente impressionantes. Com background em design
              e desenvolvimento, trago uma abordagem única que combina estética
              e funcionalidade.
            </p>

            <p>
              Especializada em React, JavaScript e HTML / CSS, transformo ideias
              complexas em experiências digitais intuitivas e acessíveis.
            </p>
          </div>

          <div className={styles.habilidades}>
            <h3 className={styles.habilidadesTitulo}>
              Principais Habilidades:
            </h3>
            <ul className={styles.listaHabilidades}>
              <li className={styles.itemHabilidade}>
                <span className={styles.icone}>▶</span> Desenvolvimento React
              </li>
              <li className={styles.itemHabilidade}>
                <span className={styles.icone}>▶</span> HTML / CSS
              </li>
              <li className={styles.itemHabilidade}>
                <span className={styles.icone}>▶</span> JavaScript ES6+
              </li>
              <li className={styles.itemHabilidade}>
                <span className={styles.icone}>▶</span> Responsive Design
              </li>
              <li className={styles.itemHabilidade}>
                <span className={styles.icone}>▶</span> Git & Version Control
              </li>
            </ul>
          </div>

          <div className={styles.botoes}>
            <div className={styles.containerBorda}>
              <div className={styles.gradientBorder}>
                <Link className={styles.link} to="/contato">
                  Entre em Contato
                </Link>
              </div>
            </div>

            <div className={styles.containerBorda}>
              <div className={styles.gradientBorder}>
                <Link className={styles.link} to="/projetos">
                  Ver Projetos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
