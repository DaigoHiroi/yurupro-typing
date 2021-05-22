import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import MenuTitle from "components/menus/menu_title";
import MenuList from "components/menus/menu_list";
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
          <title>Yuru-Pro Typing 副詞コース レベル選択</title>
          <meta name="description" content="TOEICの英単語をタイピングで学ぶ" />
          <meta property="og:Yuru-Pro Typing" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section>
          <MenuTitle title={"TOEIC®︎副詞コース"} />
          <MenuList
            title={"Level 1"}
            regular_link={"/toeic/play_noun/level_1_regular"}
            random_link={"/toeic/play_noun/level_1_random"}
            crazy_link={"/toeic/play_noun/level_1_crazy"}
            endless_link={"/toeic/play_noun/level_1_endless"}
            book_link={"/toeic/play_noun/level_1_book"}
            list_link={"/toeic/play_noun/level_1_list"}
          />
          <MenuList
            title={"Level 2"}
            regular_link={"/toeic/play_noun/level_1_regular"}
            random_link={"/toeic/play_noun/level_1_random"}
            crazy_link={"/toeic/play_noun/level_1_crazy"}
            endless_link={"/toeic/play_noun/level_1_endless"}
            book_link={"/toeic/play_noun/level_1_book"}
            list_link={"/toeic/play_noun/level_1_list"}
          />
          <MenuList
            title={"Level 3"}
            regular_link={"/toeic/play_noun/level_1_regular"}
            random_link={"/toeic/play_noun/level_1_random"}
            crazy_link={"/toeic/play_noun/level_1_crazy"}
            endless_link={"/toeic/play_noun/level_1_endless"}
            book_link={"/toeic/play_noun/level_1_book"}
            list_link={"/toeic/play_noun/level_1_list"}
          />
          <MenuList
            title={"Level 4"}
            regular_link={"/toeic/play_noun/level_1_regular"}
            random_link={"/toeic/play_noun/level_1_random"}
            crazy_link={"/toeic/play_noun/level_1_crazy"}
            endless_link={"/toeic/play_noun/level_1_endless"}
            book_link={"/toeic/play_noun/level_1_book"}
            list_link={"/toeic/play_noun/level_1_list"}
          />
          <Account />
        </section>
      </div>
    </>
  );
}
