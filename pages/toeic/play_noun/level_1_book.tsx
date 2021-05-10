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
    [" ", "This is the first page.", "/sampleA.jpg"],
    ["apple", "りんご", "/apple.png"],
    ["banana", "ばなな", "/banana.png"],
    ["melon", "メロン", "/melon.png"],
  ];

  const [count, setCount] = useState(0);
    // Declare multiple state variables!
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    const clickNext = () => {
      if (vocabulary_data.length === count + 1){
        setCount(0);
        speakNextEnglish();
      }else{
        setCount(count + 1);
        speakNextEnglish();
      };
    };
    const clickBefore = () => {
      if (count === 0){
        setCount(vocabulary_data.length - 1);
        speakBeforeEnglish();
      }else{
        setCount(count - 1);
        speakBeforeEnglish();
      };
    };

    const clickSpeak = () => {
      const speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      speechSynthesis.cancel();
      speech.text = vocabulary_data[count][0];
      speechSynthesis.speak(speech);
    };

    const speakNextEnglish = () => {
      const speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      speechSynthesis.cancel();
      if (!(vocabulary_data.length === count + 1)){
      speech.text = vocabulary_data[count + 1][0];
      speechSynthesis.speak(speech);
      }
    };

    const speakBeforeEnglish = () => {
      const speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      speechSynthesis.cancel();
      if (!(count === 0)){
      speech.text = vocabulary_data[count - 1][0];
      speechSynthesis.speak(speech);
      }
    };

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
            src={vocabulary_data[count][2]}
            height={200}
            width={324}
            alt="Sample"
            id="pic"
          />
        </div>
        <div className="text-center grid-cols-12">
      <p className="font-bold text-center text-6xl text-gray-600 pt-1" id="english_text">
      {vocabulary_data[count][0]}
        </p>
        <p className="font-bold text-center text-3xl text-gray-900 pt-4" id="japanese_text">
        {vocabulary_data[count][1]}
        </p>
      <p>-[ {count} ]-</p>
      <button onClick={clickBefore} className="w-28 h-10 bg-green-700 hover:bg-green-800 text-white text-2xl px-4 rounded">
        Before
      </button>
      <button onClick={clickSpeak} className="w-28 h-10 bg-yellow-700 hover:bg-yellow-800 text-white text-2xl px-4 rounded">
        Speak
      </button>

      <button onClick={clickNext} className="w-28 h-10 bg-blue-700 hover:bg-blue-800 text-white text-2xl px-4 rounded">
        Next
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
