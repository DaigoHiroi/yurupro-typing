import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import Link from "next/link";
import CourseSelect from "components/index/templates/courseSelect";
import Caution from "components/notice/templates/caution";
import React from "react";

export const getServerSideProps = async (context) => ({
  props: {
    layout: true, // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
  },
});

export default function Home() {
  return (
    <div className="grid-cols-12 gap-4">
      <Head>
        <title>Yuru-Pro Typing ~ Toeic®︎などの英語学習タイピングアプリ~</title>
        <meta name="description" content="Let's try ENGLISH TYPING!!" />
        <meta property="og:タイピングしながら英語学習しよう。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="font-bold text-center text-5xl text-yellow-700">
          Yuru-Pro<span className="text-blue-900">Typing</span>
        </h1>

        <p className="font-bold text-center text-xl text-gray-500">
          英語学習超特化型タイピングサイト
        </p>
        <section>
          <CourseSelect />
        </section>
        <section className="pt-8">
          <Caution />
        </section>
      </main>
    </div>
  );
}
