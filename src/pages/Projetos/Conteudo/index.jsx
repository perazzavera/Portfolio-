import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Conteudo.module.css";

export default function Conteudo() {
  const [projetos, setProjetos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("/src/mocks/projetos.json")
      .then((res) => res.json())
      .then((data) => {
        setProjetos(data.projetos);
        setCarregando(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar projetos:", err);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <div className={styles.carregando}>Carregando projetos...</div>;
  }

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.titulo}>
          <span className={styles.destaque}>/</span>projetos
        </h1>
        <div className={styles.linha}></div>
        <p className={styles.subtitulo}>
          Explore meus principais trabalhos e experimente os demos
        </p>
      </div>

      <div className={styles.gridProjetos}>
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            className={`${styles.card} ${
              projeto.destaque ? styles.destaque : ""
            }`}
          >
            <div className={styles.cardImagemContainer}>
              <img
                src={projeto.src}
                alt={projeto.titulo}
                className={styles.cardImagem}
                loading="lazy"
              />
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardTags}>
                {projeto.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className={styles.cardTitulo}>{projeto.titulo}</h3>
              <p className={styles.cardDescricao}>{projeto.descricao}</p>

              <div className={styles.cardBotoes}>
                <a
                  href={projeto.linkDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.botaoDemo}
                >
                  Ver Demo
                </a>
                <a
                  href={projeto.linkRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.botaoCodigo}
                >
                  Código Fonte
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
