import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Titre</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Prix</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Quantité</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Couleur</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "Couleur"}
          />
          <label>Taille</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size || "Taille"}
          />
          <label>Catégorie</label>
          <select name="cat" id="cat">
            <option value="kitchen">Cuisine</option>
            <option value="computers">Ordinateurs</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product.desc}
          ></textarea>
          <button>Mettre à jour</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
