import Image from "next/image";
import Link from "next/link";
import styles from "styles/Home.module.css";

const Account = (props) => {
  return (
    <>
      <div className={styles.main}>
        <h1 className="mb-4 font-bold text-green-700 text-2xl pt-6">
          アカウントを作成しよう！
        </h1>
        <p className="mb-2 text-center">
          このタイピングサイトはアカウントを作成することで、これまでのタイピングしたデータを保存できます。
        </p>
        <p>1分でアカウントを作成して、最大限楽しみましょう！</p>
        <div className="pt-6">
          <button className="w-26 h-12 bg-blue-800 font-bold hover:bg-blue-700 text-white py-2 px-4 rounded">
            <div className="text-sm">アカウント作成</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Account;
