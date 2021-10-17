import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import ButtonExit from "components/buttonExit";
import Data from './data.json';
import styles from 'styles/Play.module.css';

//TODO bookのコンポーネント化
export const getServerSideProps = async (context) => ({
  props: {
    layout: true, // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
  },
});

export default function PlayBook() {
  //ここで呼ぶ変数を指定
  const file_path = Data.data.level_1.file_path;
  const vocabulary_data = Data.data.level_1.vocabulary_data;

  const [count, setCount] = useState(0);
  const clickNext = () => {
    if (vocabulary_data.length === count + 1) {
      setCount(0);
      speakNextEnglish();
    } else {
      setCount(count + 1);
      speakNextEnglish();
    }
  };
  const clickBefore = () => {
    if (count === 0) {
      setCount(vocabulary_data.length - 1);
      speakBeforeEnglish();
    } else {
      setCount(count - 1);
      speakBeforeEnglish();
    }
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
    if (!(vocabulary_data.length === count + 1)) {
      speech.text = vocabulary_data[count + 1][0];
      speechSynthesis.speak(speech);
    } else {
      speech.text = vocabulary_data[0][0];
      speechSynthesis.speak(speech);
    }
  };

  const speakBeforeEnglish = () => {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speechSynthesis.cancel();
    if (!(count === 0)) {
      speech.text = vocabulary_data[count - 1][0];
      speechSynthesis.speak(speech);
    } else {
      speech.text = vocabulary_data[vocabulary_data.length - 1][0];
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
            src={file_path + vocabulary_data[count][2]}
            height={200}
            width={324}
            alt="単語帳の画像"
            id="pic"
            className={styles.pic}
          />
        </div>
        <div className="text-center">
          <p
            className="font-bold text-center text-6xl text-gray-600 pt-1"
            id="english_text"
          >
            {vocabulary_data[count][0]}
          </p>
          <p
            className="font-bold text-center text-3xl text-gray-900 pt-4"
            id="japanese_text"
          >
            {vocabulary_data[count][1]}
          </p>
          <div className="pt-3">
            <p>-[ {count} ]-</p>
          </div>
          <div className="grid  grid-cols-12 pt-3">
            <div className="lg:col-start-4 lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2">
              <button
                onClick={clickBefore}
                className="w-28 h-10 bg-green-700 hover:bg-green-800 text-white text-2xl px-4 rounded"
              >
                <div className="text-lg font-bold">←Before</div>
              </button>
            </div>
            <div className="lg:col-span-2  md:col-span-2 sm:col-span-2">
              <button
                onClick={clickSpeak}
                className="w-28 h-10 bg-yellow-600 hover:bg-yellow-700 text-white text-2xl px-4 rounded"
              >
                <div className="text-lg font-bold">Speak</div>
              </button>
            </div>
            <div className="lg:col-span-2  md:col-span-2 sm:col-span-2">
              <button
                onClick={clickNext}
                className="w-28 h-10 bg-blue-700 hover:bg-blue-800 text-white text-2xl px-4 rounded"
              >
                <div className="text-lg font-bold">Next→</div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-12"><ButtonExit url='/toeic/menus/noun'/></section>
    </>
  );
}
