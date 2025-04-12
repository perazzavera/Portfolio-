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

export default function Contato() {
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
      alert("Erro ao enviar mensagem. Tente novamente mais tarde.");
      console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.titulo}>
          <span className={styles.destaque}>#</span>contato
        </h2>
        <div className={styles.linha}></div>
        <p className={styles.subtitulo}>
          Entre em contato para colaborações ou oportunidades
        </p>
      </div>

      <div className={styles.conteudo}>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={styles.formulario}
        >
          <div className={styles.campo}>
            <label htmlFor="nome" className={styles.label}>
              Nome
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
              E-mail
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
              Mensagem
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
              "Enviando..."
            ) : (
              <>
                <FiSend className={styles.iconeBotao} /> Enviar Mensagem
              </>
            )}
          </button>

          {success && (
            <div className={styles.mensagemSucesso}>
              <FiCheckCircle />
              Mensagem enviada com sucesso!
            </div>
          )}
        </form>

        <div className={styles.infoContato}>
          <div className={styles.contatoItem}>
            <FiMail className={styles.icone} />
            <div>
              <h3 className={styles.infoTitulo}>E-mail</h3>
              <a href="mailto:verapz.dev@gmail.com" className={styles.infoLink}>
                verapz.dev@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.redesSociais}>
            <h3 className={styles.redesTitulo}>Redes Sociais</h3>
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
