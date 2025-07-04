import { useState } from "react";
import styles from "../styles/Home.module.css";
import Panther from "../assets/panther.png";
import Spinner from 'react-bootstrap/Spinner';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <>
    <div className={styles.Wrapper}>
      <div className={styles.TextBlock}>
        <h1 className={`text-center ${styles.Name}`}>Niki Gavlider</h1>

        <p className={`text-center ${styles.Word}`}>Artist by Heart & Soul</p>
      </div>
      <div className={styles.background}>
      {loading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "200px" }}
          >
            <Spinner animation="grow" variant="primary" />
          </div>
        )}
        <img
          alt="panther"
          src={Panther}
          onLoad={handleImageLoad}
          style={{ display: loading ? "none" : "block" }}
        />
      </div>
      </div>
    </>
  );
}
