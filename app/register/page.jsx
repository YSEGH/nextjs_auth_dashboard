import styles from "@/app/ui/register/register.module.css";
import React from "react";
import RegisterForm from "../ui/register/registerForm/registerForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
      <p>
        Déjà un compte ? <Link href={"/login"}>Me connecter.</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
