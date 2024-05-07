"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <h1>Me connecter</h1>
      <input type="text" placeholder="Nom de compte" name="username" />
      <input type="password" placeholder="Mot de passe" name="password" />
      <button>Connexion</button>
      <p>
        Vous pouvez créer vos identifiants ou vous connecter avec les suivants :
        <br />
        <br />
        Nom de compte: test <br />
        Mot de passe: test
      </p>
      <p className={styles["form-error"]}>{state && state}</p>
    </form>
  );
};

export default LoginForm;
