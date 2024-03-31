import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input
          type="text"
          placeholder="Nom de compte"
          name="username"
          required
        />
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          required
        />
        <input type="phone" placeholder="Téléphone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Administrateur ?</option>
          <option value={true}>Oui</option>
          <option value={false}>Non</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Est Actif ?</option>
          <option value={true}>Oui</option>
          <option value={false}>Non</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Adresse"
        ></textarea>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default AddUserPage;
