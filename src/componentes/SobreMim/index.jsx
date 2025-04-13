import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";
import styles from "./SobreMim.module.css";

export default function SobreMim() {
  const { language, changeLanguage, translations } = useLanguage();
  const t = translations[language];

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
          {t.sobreMim.titulo}
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
            {t.sobreMim.subtitulo.replace("{{nome}}", "")}
            <span className={styles.nomeDestaque}>Vera Perazza</span>
          </h2>
          <div className={styles.bio}>
            <p>{t.sobreMim.bio1}</p>
            <p>{t.sobreMim.bio2}</p>
          </div>

          <div className={styles.habilidades}>
            <h3 className={styles.habilidadesTitulo}>
              {t.sobreMim.habilidadesTitulo}
            </h3>
            <ul className={styles.listaHabilidades}>
              {t.sobreMim.habilidades.map((habilidade, index) => (
                <li key={index} className={styles.itemHabilidade}>
                  <span className={styles.icone}>▶</span> {habilidade}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.botoes}>
            <div className={styles.containerBorda}>
              <div className={styles.gradientBorder}>
                <Link className={styles.link} to="/contato">
                  {t.sobreMim.botaoContato}
                </Link>
              </div>
            </div>

            <div className={styles.containerBorda}>
              <div className={styles.gradientBorder}>
                <Link className={styles.link} to="/projetos">
                  {t.sobreMim.botaoProjetos}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
