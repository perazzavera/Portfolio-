import { useLanguage } from "../../../context/LanguageContext";
import projetos from "../../../mocks/projetos.json";
import styles from "./Conteudo.module.css";

export default function Conteudo() {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };

  return (
    <section className={styles.container}>
      <div className={styles.languageSwitcher}>
        <button
          onClick={() => handleLanguageChange("pt")}
          className={styles.languageButton}
        >
          <img src="/images/BR.svg" alt="Bandeira do Brasil" />
        </button>
        <button
          onClick={() => handleLanguageChange("en")}
          className={styles.languageButton}
        >
          <img src="/images/US.svg" alt="Bandeira dos EUA" />
        </button>
        <button
          onClick={() => handleLanguageChange("it")}
          className={styles.languageButton}
        >
          <img src="/images/IT.svg" alt="Bandeira da Itália" />
        </button>
      </div>

      <div className={styles.header}>
        <h1 className={styles.titulo}>
          <span className={styles.destaque}>/</span>
          {language === "pt"
            ? "projetos"
            : language === "en"
            ? "projects"
            : "progetti"}
        </h1>
        <div className={styles.linha}></div>
        <p className={styles.subtitulo}>
          {language === "pt"
            ? "Explore meus principais trabalhos e experimente os demos"
            : language === "en"
            ? "Explore my main works and try the demos"
            : "Esplora i miei lavori principali e prova le demo"}
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
              <p className={styles.cardDescricao}>
                {projeto.descricao[language]}{" "}
                {/* Acessando diretamente a descrição */}
              </p>
              <div className={styles.cardBotoes}>
                <a
                  href={projeto.linkDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.botaoDemo}
                >
                  {language === "pt"
                    ? "Ver Demo"
                    : language === "en"
                    ? "View Demo"
                    : "Guarda Demo"}
                </a>
                <a
                  href={projeto.linkRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.botaoCodigo}
                >
                  {language === "pt"
                    ? "Código Fonte"
                    : language === "en"
                    ? "Source Code"
                    : "Codice Sorgente"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
