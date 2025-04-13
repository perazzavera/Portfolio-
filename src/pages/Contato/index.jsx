import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contato.module.css";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";

export default function Contato() {
  const { language, changeLanguage, translations } = useLanguage();
  const t = translations[language].contato;

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      formRef.current.reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      alert(t.erroMensagem); // Usando a tradução para erro
      console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className={styles.container}>
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

      <div className={styles.header}>
        <h2 className={styles.titulo}>
          <span className={styles.destaque}>#</span>
          {t.titulo}
        </h2>
        <div className={styles.linha}></div>
        <p className={styles.subtitulo}>{t.subtitulo}</p>
      </div>

      <div className={styles.conteudo}>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={styles.formulario}
        >
          <div className={styles.campo}>
            <label htmlFor="nome" className={styles.label}>
              {t.nome}
            </label>
            <input
              type="text"
              id="nome"
              name="user_name"
              className={styles.input}
              required
              minLength={3}
            />
          </div>

          <div className={styles.campo}>
            <label htmlFor="email" className={styles.label}>
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.campo}>
            <label htmlFor="mensagem" className={styles.label}>
              {t.mensagem}
            </label>
            <textarea
              id="mensagem"
              name="user_message"
              rows="5"
              className={styles.textarea}
              required
              minLength={10}
            ></textarea>
          </div>

          <button type="submit" className={styles.botao} disabled={loading}>
            {loading ? (
              t.enviando
            ) : (
              <>
                <FiSend className={styles.iconeBotao} /> {t.enviar}
              </>
            )}
          </button>

          {success && (
            <div className={styles.mensagemSucesso}>
              <FiCheckCircle /> {t.sucesso}
            </div>
          )}
        </form>

        <div className={styles.infoContato}>
          <div className={styles.contatoItem}>
            <FiMail className={styles.icone} />
            <div>
              <h3 className={styles.infoTitulo}>{t.emailTitulo}</h3>
              <a href="mailto:verapz.dev@gmail.com" className={styles.infoLink}>
                verapz.dev@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.redesSociais}>
            <h3 className={styles.redesTitulo}>{t.redesTitulo}</h3>
            <div className={styles.icones}>
              <a
                href="https://linkedin.com/in/veraluciaperazza"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://github.com/perazzavera"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://instagram.com/veranaitalia"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
