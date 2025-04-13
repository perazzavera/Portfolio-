import { useLanguage } from "../../context/LanguageContext"; // Importando o hook useLanguage
import styles from "./Rodape.module.css";

export default function Rodape() {
  const { language } = useLanguage(); // Pegando o idioma atual

  return (
    <footer className={styles.container}>
      <div className="text-center py-3">
        <p className="m-0">
          {language === "pt" && (
            <>
              Desenvolvido com ❤ por Vera Perazza{" "}
              <a
                href="http://github.com/perazzavera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-github" />
              </a>
            </>
          )}
          {language === "en" && (
            <>
              Developed with ❤ by Vera Perazza{" "}
              <a
                href="http://github.com/perazzavera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-github" />
              </a>
            </>
          )}
          {language === "it" && (
            <>
              Sviluppato con ❤ da Vera Perazza{" "}
              <a
                href="http://github.com/perazzavera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-github" />
              </a>
            </>
          )}
        </p>
      </div>
    </footer>
  );
}
