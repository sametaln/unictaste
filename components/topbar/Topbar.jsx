import styles from '../../styles/Topbar.module.scss';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <span className={styles.logo}>
        <a className={styles.logoLink} href="/">
          Unic<span className={styles.topbarTaste}>taste</span>
        </a>
      </span>
      <nav className={styles.nav}>
        <a href="/usage" className={styles.link}>
          Usage
        </a>
        <a href="/contact" className={styles.link}>
          Contact Us
        </a>
        <a href="/app" className={styles.link}>
          App
        </a>
      </nav>
    </div>
  );
};

export default Topbar;
