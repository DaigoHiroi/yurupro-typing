import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import Account from "components/notice/account";

export const getServerSideProps = async (context) => ({
  props: {
    layout: true, // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
  },
});

export default function Play() {
  const vocabulary_data = [
    ["This is the first page.", "This is the first page.", "/sampleA.jpg"],
    ["apple", "りんご", "/apple.png"],
    ["banana", "バナナ", "/banana.png"],
    ["melon", "メロン", "/melon.png"],
  ];

  const [count, setCount] = useState(0);
  var cnt = 0;
  var checkTexts;
  var startFlg = false;

  const escFunction = useCallback((event) => {
    if (startFlg){
    if (event.key === checkTexts[0].textContent) {
      checkTexts[0].className = "font-bold stext-7xl text-blue-800 font-serif";
      checkTexts.shift();
      if (!checkTexts.length) {
        if (vocabulary_data.length === cnt + 1) {
          cnt = 0;
          setCount(0);
          speakEnglish();
          spanText();
        }else {
        cnt = cnt + 1;
        speakEnglish();
        spanText();
        setCount(cnt);
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
  }}, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
  }, []);

  const moveNext = () => {
    if (vocabulary_data.length === count + 1) {
      cnt = 0;
      setCount(0);
      speakNextEnglish();
    } else {
      cnt = cnt + 1;
      setCount(cnt);
      speakNextEnglish();
    }
  };

  const clickStart = () => {
    startFlg=true;
    moveNext();
    speakEnglish();
    spanText();
    document.getElementById("start_button").style.display = "none";
  };

  const spanText = () => {
    disp_english_text.textContent="";
    checkTexts = vocabulary_data[cnt][0].split("").map(function (value) {
      var span = document.createElement("span");
      span.textContent = value;
      disp_english_text.appendChild(span);
      return span;
    });
  };

  const speakEnglish = () => {
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
        <div className="text-center">
          <p
            className="font-bold text-center text-6xl text-gray-600 pt-1"
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

          <div className="grid  grid-cols-12 pt-3">
            <div className="lg:col-start-4 lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2">
              <button
                onClick={clickStart}
                className="w-28 h-10 bg-green-700 hover:bg-green-800 text-white text-2xl px-4 rounded"
                id ="start_button"
              >
                <div className="text-lg font-bold">Start</div>
              </button>
            </div>

          </div>
        </div>
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
