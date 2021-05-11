import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';

export const getServerSideProps = async (context) => ({
  props: {
    layout: true, // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
  },
});

export default function Play() {
  const vocabulary_data = [
    ["town", "町", "sampleA.jpg"],
    ["apple", "りんご", "sampleB.jpg"],
    ["town", "まち", "sampleB.jpg"],
    ["town", "町", "sampleA.jpg"],
    ["town", "町", "sampleA.jpg"],
    [" ", "クリア！（スペースキーで最初に戻る）", "sampleA.jpg"],
  ];

  const [count, setCount] = useState(0);
    // Declare multiple state variables!
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

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
        <h1 className="font-bold text-center text-5xl text-blue-900">
          Level 1 <span className="text-yellow-700 text-4xl">【Regular】</span>
        </h1>

        <p className="font-bold text-center text-2xl text-gray-500">
          TOEIC®︎名詞コース
        </p>
      </div>
      <section>
        <div className="text-center pt-8">
          <Image
            src="/SampleA.jpg"
            height={200}
            width={324}
            alt="Sample"
            id="pic"
          />
        </div>
        <div className="text-center grid-cols-12">
          <div className="pt-8">
        <button onClick={buttonAlert} id="start_button" className="w-28 h-10 bg-blue-700 hover:bg-blue-800 text-white text-2xl px-4 rounded">
              Start
          </button>
          </div>
          <p id="caution" className="text-sm pt-4 font-bold text-yellow-800">※音が鳴ります。<br></br>※ログインせずに開始すると<br></br>進捗をセーブできません。</p>
          </div>
      </section>
      <section>
      <p className="font-bold text-center text-6xl text-gray-600 pt-1" id="english_text">
          
        </p>
        <p className="font-bold text-center text-3xl text-gray-900 pt-4" id="japanese_text">
          
        </p>
        <div>
      <p>You clicked {count} times</p>
      <p>{vocabulary_data[count][0]}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
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
          <p className="font-bold text-sm">
            単語数カウント
          </p>
          <p id="count_word">0</p>
          </div>
        <div className="lg:col-span-2 pl-20">
          <p className="font-bold text-sm">
            文字数カウント
          </p>
          <p id="count_char">0</p>
          </div>
        <div className="lg:col-span-2 pl-20">
        <p className="font-bold text-sm">
          コンテンツ数
        </p>
          <p id="count_max_word">0</p>
          </div>
          </div>
          <div className="text-center pt-8 grid-cols-12">
          <button className="w-28 h-10 bg-green-700 hover:bg-green-700 text-white text-2xl px-4 rounded">
              Save
          </button>
          </div>
      </section>

      <section>
        <div className="text-center grid-cols-12 pt-8">
          <h1 className="mb-4 font-bold text-green-700 text-2xl pt-12">
            アカウントを作成しよう！
          </h1>
          <p className="text-sm mb-2 text-center">
            このタイピングサイトはアカウントを作成することで、これまでのタイピングしたデータを保存できます。
          </p>
          <p className="text-sm mb-2 text-center">1分でアカウントを作成して、最大限楽しみましょう！</p>
          <div className="pt-6">
          <button className="w-36 h-10 bg-blue-800 font-bold hover:bg-blue-700 text-white py-2 px-4 rounded">
          <div className="text-sm">
              アカウント作成
          </div>
          </button>
          </div>
        </div>
      </section>

      {//<script type="text/javascript" src="/static/play.js"></script>
      }
    </>
  );
}
