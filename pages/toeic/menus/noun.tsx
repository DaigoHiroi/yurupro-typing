import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import MenuTitle from "components/menus/menu_title";
import MenuList from "components/menus/menu_list";
import Account from "components/notice/account";
import React, { useState, useEffect, useCallback } from "react";

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
          <title>Yuru-Pro Typing 名詞コース レベル選択</title>
          <meta name="description" content="TOEICの英単語をタイピングで学ぶ" />
          <meta property="og:Yuru-Pro Typing" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section>
          <MenuTitle title={"TOEIC®︎名詞コース"} />
          <MenuList
            title={"Level 1"}
            regular_link={"/toeic/play_noun/level_1_regular"}
            random_link={"/toeic/play_noun/level_1_random"}
            crazy_link={"/toeic/play_noun/level_1_crazy"}
            endless1_link={"/toeic/play_noun/level_1_endless1"}
            endless2_link={"/toeic/play_noun/level_1_endless2"}
            book_link={"/toeic/play_noun/level_1_book"}

          />
          <MenuList
            title={"Level 2"}
            regular_link={"/toeic/play_noun/level_2_regular"}
            random_link={"/toeic/play_noun/level_2_random"}
            crazy_link={"/toeic/play_noun/level_2_crazy"}
            endless1_link={"/toeic/play_noun/level_2_endless1"}
            endless2_link={"/toeic/play_noun/level_2_endless2"}
            book_link={"/toeic/play_noun/level_2_book"}
          />
          <MenuList
            title={"Level 3"}
            regular_link={"/toeic/play_noun/level_3_regular"}
            random_link={"/toeic/play_noun/level_3_random"}
            crazy_link={"/toeic/play_noun/level_3_crazy"}
            endless1_link={"/toeic/play_noun/level_3_endless1"}
            endless2_link={"/toeic/play_noun/level_3_endless2"}
            book_link={"/toeic/play_noun/level_3_book"}
          />
          <MenuList
            title={"Level 4"}
            regular_link={"/toeic/play_noun/level_4_regular"}
            random_link={"/toeic/play_noun/level_4_random"}
            crazy_link={"/toeic/play_noun/level_4_crazy"}
            endless1_link={"/toeic/play_noun/level_4_endless1"}
            endless2_link={"/toeic/play_noun/level_4_endless2"}
            book_link={"/toeic/play_noun/level_4_book"}
          />
          <Account />
        </section>
      </div>
    </>
  );
}
