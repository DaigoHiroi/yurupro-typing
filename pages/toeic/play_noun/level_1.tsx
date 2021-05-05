import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

export const getServerSideProps = async (context) => ({
  props: {
    layout: true, // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
  },
});

export default function Play() {
  const buttonAlert = () => {
    {//createText();
    }
    document.getElementById("start_button").style.display = "none";
    document.getElementById("caution").style.display = "none";
    document.getElementById("english_text").textContent = "town";
    document.getElementById("japanese_text").textContent = "町";

    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speechSynthesis.cancel();
    speech.text = "town";
    speechSynthesis.speak(speech);
  }

  return (
    <>
      <Head>
        <title>Yuru-Pro_Typing 名詞 level 1</title>
        <meta name="description" content="Let's try TOEIC TYPING!!" />
        <meta property="og:aaa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid-cols-12 gap-4">
        <h1 className="font-bold text-center text-6xl text-blue-900 pt-28">
          Level 1 <span className="text-yellow-700 text-5xl">【Regular】</span>
        </h1>

        <p className="font-bold text-center text-2xl text-gray-500">
          TOEIC®︎名詞コース
        </p>
      </div>
      <section>
        <div className="text-center pt-8">
          <Image
            src="/SampleA.jpg"
            height={300}
            width={480}
            alt="Sample"
            id="pic"
          />
        </div>
        <div className="text-center grid-cols-12">
          <div className="pt-8">
        <button onClick={buttonAlert} id="start_button" className="w-32 h-16 bg-blue-700 hover:bg-blue-800 text-white text-3xl py-2 px-4 rounded">
              Start
          </button>
          </div>
          <p id="caution" className="text-xl pt-4 font-bold text-yellow-800">※音が鳴ります。<br></br>※ログインせずに開始すると<br></br>進捗をセーブできません。</p>
          </div>
      </section>
      <section>
      <p className="font-bold text-center text-8xl text-gray-600 pt-2" id="english_text">
          
        </p>
        <p className="font-bold text-center text-4xl text-gray-900 pt-6" id="japanese_text">
          
        </p>
      </section>

      <section>
      <div className="text-center pt-8 grid-cols-12">
          <progress id="myProgress" value="0" max="100">
            0%
          </progress>
        </div>
      </section>

      <section>
      <div className="grid grid-cols-12 gap-4">
        <div className="lg:col-start-4 lg:col-span-2 pl-20">
          <p className="font-bold text-lg">
            単語数カウント
          </p>
          <p id="count_word">0</p>
          </div>
        <div className="lg:col-span-2 pl-20">
          <p className="font-bold text-lg">
            文字数カウント
          </p>
          <p id="count_char">0</p>
          </div>
        <div className="lg:col-span-2 pl-20">
        <p className="font-bold text-lg">
          コンテンツ数
        </p>
          <p id="count_max_word">0</p>
          </div>
          </div>
          <div className="text-center pt-8 grid-cols-12">
          <button className="w-32 h-16 bg-green-700 hover:bg-green-700 text-white text-3xl py-2 px-4 rounded">
              Save
          </button>
          </div>
      </section>

      <section>
        <div className="text-center grid-cols-12 pt-12">
          <h1 className="mb-4 font-bold text-green-700 text-3xl pt-12">
            アカウントを作成しよう！
          </h1>
          <p className="mb-2 text-center">
            このタイピングサイトはアカウントを作成することで、これまでのタイピングしたデータを保存できます。
          </p>
          <p>1分でアカウントを作成して、最大限楽しみましょう！</p>
          <div className="pt-6">
          <button className="w-36 h-12 bg-blue-800 font-bold hover:bg-blue-700 text-white py-2 px-4 rounded">
              アカウント作成
          </button>
          </div>
        </div>
      </section>

      {//<script type="text/javascript" src="/static/play.js"></script>
      }
    </>
  );
}
