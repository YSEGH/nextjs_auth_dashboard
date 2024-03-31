"use client";

import React from "react";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { register } from "@/app/lib/actions";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <h1>Créer mon compte</h1>
      <input
        type="text"
        placeholder="Nom de compte"
        name="username"
        autoComplete="off"
        required
      />
      <input type="email" placeholder="Email" name="email" required />
      <input
        type="password"
        placeholder="Mot de passe"
        name="password"
        autoComplete="off"
        required
      />
      <button>{"M'inscrire"}</button>
      <p className={styles["form-error"]}>{state && state}</p>
    </form>
  );
};

export default RegisterForm;
