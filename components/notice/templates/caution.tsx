
import styles from "styles/Home.module.css";

const Caution = (props) => {
  return (
    <>
      <div className={styles.main}>
        <h1 className="mb-4 font-bold text-yellow-700 text-2xl pt-6">
          注意
        </h1>
        <p className="mb-2 text-center">
          セーブデータはブラウザに保存されます。
          このアプリは開発中のため、セーブデータの保証は致しかねます。
        </p>
      </div>
    </>
  );
};

export default Caution;
