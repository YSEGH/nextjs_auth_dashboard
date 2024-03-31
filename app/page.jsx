import Link from "next/link";
import styles from "./page.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <h1 className={styles["homepage-title"]}>Bienvenue</h1>
      <div className={styles["btn-container"]}>
        <Link className={styles["login-btn"]} href={"/login"}>
          Connexion
        </Link>
        <Link className={styles["register-btn"]} href={"/register"}>
          Inscription
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
