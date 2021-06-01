import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Account from "components/notice/account";
import Data from './data.json';

export const getServerSideProps = async (context) => ({
  props: {
    layout: true, // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
  },
});

export default function Play() {
  //ここで呼ぶ変数を指定
  const vocabulary_data = Data.data.level_1.vocabulary_data;
  const [count, setCount] = useState(0);


  return (
    <>
      <Head>
        <title>Yuru-Pro_Typing 名詞 level 1</title>
        <meta name="description" content="Let's try TOEIC TYPING!!" />
        <meta property="og:aaa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid-cols-12 gap-4">
        <h1 className="font-bold text-center text-5xl text-blue-900">
          Level 1 <span className="text-yellow-700 text-4xl">【Regular】</span>
        </h1>

        <p className="font-bold text-center text-2xl text-gray-500">
          TOEIC®︎名詞コース
        </p>
      </div>
      <section>
      <ul>
      {vocabulary_data}
      </ul>
      </section>

      <section>
      <Account />
      </section>

      {
        //<script type="text/javascript" src="/static/play.js"></script>
      }
    </>
  );
}
