"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const paths = {
  dashboard: "Tableau de bord",
  users: "Utilisateurs",
  products: "Produits",
  transactions: "Transactions",
  revenue: "Profits",
  reports: "Alertes",
  teams: "Equipe",
  settings: "Paramètres",
  help: "Aide",
};

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{paths[pathname.split("/").pop()]}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input
            type="text"
            placeholder="Rechercher..."
            className={styles.input}
          />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
