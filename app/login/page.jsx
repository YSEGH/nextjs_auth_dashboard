import styles from "@/app/ui/login/login.module.css";
import LoginForm from "../ui/login/loginForm/loginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
      <p>
        Pas de compte ? <Link href={"/register"}>Créer mon compte.</Link>
      </p>
    </div>
  );
};

export default LoginPage;
