import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Nom de compte</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Mot de passe</label>
          <input type="password" name="password" />
          <label>Téléphone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Adresse</label>
          <textarea type="text" name="address" placeholder={user.address} />
          <label>Administrateur ?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Oui
            </option>
            <option value={false} selected={!user.isAdmin}>
              Non
            </option>
          </select>
          <label>Actif ?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Oui
            </option>
            <option value={false} selected={!user.isActive}>
              Non
            </option>
          </select>
          <button>Mettre à jour</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
