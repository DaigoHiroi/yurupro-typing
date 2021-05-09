import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import Menu from "components/menus/menu";
import Account from "components/notice/account";

export const getServerSideProps = async (context) => ({
  props: {
    layout: true, // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
  },
});

export default function nounMenu() {
  return (
    <>
      <div className="grid">
        <Head>
          <title>Yuru-Pro_Typing 名詞 レベル選択</title>
          <meta name="description" content="Let's try TOEIC TYPING!!" />
          <meta property="og:aaa" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section>
          <Menu title={"TOEIC®︎名詞コース"} />
          <Account />
        </section>
      </div>
    </>
  );
}
