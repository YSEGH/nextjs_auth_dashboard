import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Suspendisse nisl</span>
          <h3 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <span className={styles.subtitle}>
            Phasellus viverra nulla ut metus
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Regarder
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Praesent nec</span>
          <h3 className={styles.title}>
            Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim
            dolor.
          </h3>
          <span className={styles.subtitle}>
            Phasellus viverra nulla ut metus
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            {"Plus d'infos"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
