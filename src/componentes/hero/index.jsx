import { useLanguage } from "../../context/LanguageContext"; // Importando o hook useLanguage
import styles from "./Hero.module.css";

export default function Hero() {
  const { language, changeLanguage } = useLanguage(); // Pegando o idioma atual e a função para alterá-lo

  // Função para alterar o idioma
  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // Usando a função correta para alterar o idioma
  };

  return (
    <section className={styles.container}>
      <div className={styles.languageSwitcher}>
        <button
          onClick={() => handleLanguageChange("pt")}
          className={styles.languageButton}
        >
          <img src="/images/BR.svg" alt="bandeira do Brasil" />
        </button>
        <button
          onClick={() => handleLanguageChange("en")}
          className={styles.languageButton}
        >
          <img src="/images/US.svg" alt="US Flag" />
        </button>
        <button
          onClick={() => handleLanguageChange("it")}
          className={styles.languageButton}
        >
          <img src="/images/IT.svg" alt="bandeira da Italia" />
        </button>
      </div>
      <div className={styles.conteudo}>
        {/* Texto baseado no idioma selecionado */}
        <h2>
          {language === "pt" && (
            <>
              Olá, eu sou <span className={styles.nome}>Vera Perazza</span>
            </>
          )}
          {language === "en" && (
            <>
              Hello, I'm <span className={styles.nome}>Vera Perazza</span>
            </>
          )}
          {language === "it" && (
            <>
              Ciao, sono <span className={styles.nome}>Vera Perazza</span>
            </>
          )}
        </h2>

        <h3 id="typing-text">
          {language === "pt" && "Desenvolvedora Front-end"}
          {language === "en" && "Front-end Developer"}
          {language === "it" && "Sviluppatore Front-end"}
        </h3>

        <div className={styles.containerBorda}>
          <div className={styles.gradientBorder}>
            <span>
              <a className={styles.link} href="/projetos">
                {language === "pt" && "Ver projetos"}
                {language === "en" && "See projects"}
                {language === "it" && "Vedi progetti"}
              </a>
            </span>
          </div>
        </div>

        {/* Botões para mudar o idioma */}
      </div>
    </section>
  );
}
