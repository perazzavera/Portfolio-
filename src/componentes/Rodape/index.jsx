import styles from "./Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={styles.container}>
      <div className="text-center py-3">
        <p className="m-0">
          Desenvolvido com ❤ por Vera Perazza{" "}
          <a
            href="http://github.com/perazzavera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-github" />
          </a>
        </p>
      </div>
    </footer>
  );
}
