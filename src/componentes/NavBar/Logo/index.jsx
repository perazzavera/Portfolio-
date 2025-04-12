import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <span className={styles.logo}>
      <span className={styles.tag}>&lt;</span>
      <span className={styles.name}>verapz</span>
      <span className={styles.domain}>.dev</span>
      <span className={styles.tag}> /&gt;</span>
      <span className={styles.cursor}> | </span>
    </span>
  );
}
