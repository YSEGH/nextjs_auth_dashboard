import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="Titre" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choisissez une catégorie</option>
          <option value="kitchen">Cuisine</option>
          <option value="phone">Téléphone</option>
          <option value="computer">Ordinateur</option>
        </select>
        <input type="number" placeholder="Prix" name="price" required />
        <input type="number" placeholder="Quantité" name="stock" required />
        <input type="text" placeholder="Couleur" name="color" />
        <input type="text" placeholder="Taille" name="size" />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default AddProductPage;
