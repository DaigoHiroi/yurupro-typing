import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import Account from "components/notice/account";
import Data from "./data.json";

export const getServerSideProps = async (context) => ({
  props: {
    layout: true, // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
  },
});

export default function Play() {
  //ここで呼ぶ変数を指定
  const file_path = Data.data.level_1.file_path;
  const vocabulary_data = Data.data.level_1.vocabulary_data;

  //TODO以下はそれぞれのコンポーネントとして表示したい
  const [count, setCount] = useState(0);
  var cnt = 0;
  var checkTexts;
  var startFlg = false;
  var disp_english_text;

  const escFunction = useCallback((event) => {
    if (startFlg) {
      if (event.key === checkTexts[0].textContent) {
        checkTexts[0].className =
          "font-bold stext-7xl text-blue-800 font-serif";
        checkTexts.shift();
        if (!checkTexts.length) {
          if (vocabulary_data.length === cnt + 1) {
            cnt = 0;
            setCount(0);
            speakNextEnglish();
            spanText();
          } else {
            cnt = cnt + 1;
            setCount(cnt);
            speakNextEnglish();
            spanText();
          }
        }
        window.onkeydown = function (event) {
          return !(event.keyCode == 32);
        };
      }
      if (event.keyCode === 27) {
        // キーコードを判定して何かする。
        console.log("Esc Key is pressed!");
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
  }, []);

  const clickStart = () => {
    startFlg = true;
    cnt = cnt + 1;
    setCount(cnt);
    speakNextEnglish();
    spanText();
    document.getElementById("start_button").style.display = "none";
  };

  const spanText = () => {
    disp_english_text.textContent = "";
    checkTexts = vocabulary_data[cnt][0].split("").map(function (value) {
      var span = document.createElement("span");
      span.textContent = value;
      disp_english_text.appendChild(span);
      return span;
    });
  };

  const speakNextEnglish = () => {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speechSynthesis.cancel();
    if (!(vocabulary_data.length === count + 1)) {
      speech.text = vocabulary_data[cnt][0];
      speechSynthesis.speak(speech);
    } else {
      //speech.text = vocabulary_data[0][0];
      //speechSynthesis.speak(speech);
    }
  };

  const speakButton = () => {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speechSynthesis.cancel();
    speech.text = vocabulary_data[count][0];
    speechSynthesis.speak(speech);
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
            alt="Sample"
            id="pic"
          />
        </div>
        <div className="text-center">
          <p
            className="font-bold text-center text-6xl text-white pt-1"
            id="disp_english_text"
          >
            　
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

          <div className="text-center pt-4">
            <div className="lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2">
              <button
                onClick={clickStart}
                className="w-28 h-10 bg-blue-700 hover:bg-blue-800 text-white text-2xl px-4 rounded"
                id="start_button"
              >
                <div className="text-lg font-bold">Start</div>
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={speakButton}
                className="w-28 h-10 bg-yellow-700 hover:bg-yellow-800 text-white text-2xl px-4 rounded"
                id="start_button"
              >
                <div className="text-lg font-bold">speak</div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Account />
      </section>
    </>
  );
}
