import styles from "../styles/Home.module.css";
import Panther from "../assets/panther.png";

export default function Home() {
  return (
    <>
      <div className={styles.TextBlock}>
        <h1 className={`text-center ${styles.Name}`}>Niki Gavlider</h1>

        <p className={`text-center ${styles.Word}`}>Artist by Heart & Soul</p>
      </div>
      <div className={styles.background}>
        <img alt="panther" src={Panther} />
      </div>
    </>
  );
}
