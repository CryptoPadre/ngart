import styles from "../styles/Gallery.module.css";
import Whale from "../assets/whale.png";
import Panther from "../assets/panther.png";

export default function Gallery() {
  return (
    <>
      <div className={styles.Bg}>
        <div id="wrapper">
          <div className={styles.foreground}>
            <img src={Whale} alt="whale" />
          </div>

          <div className={styles.background}>
            <img alt="panther" src={Panther} />
          </div>
        </div>
      </div>
    </>
  );
}
