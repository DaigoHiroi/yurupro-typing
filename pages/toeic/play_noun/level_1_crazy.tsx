import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import Account from "components/notice/account";
import Data from "./data.json";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

export const getServerSideProps = async (context) => ({
  props: {
    layout: true, // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
  },
});

export default function PlayCrazy() {
  const [random_flg, setRandom_flg] = useState(true);
  const [endless_flg, setEndless_flg] = useState(false);
  const [crazy_flg, setCrazy_flg] = useState(true);
  const file_path = Data.data.level_1.file_path;
  const [crazyFlg, setCrazyFlg] = useState(crazy_flg);
  const [vocabulary_data, setVocab] = useState(
    Data.data.level_1.vocabulary_data_rdm
  );

  const first_vocabulary_data = Data.data.first_vocabulary_data;
  const finish_vocabulary_data = Data.data.finish_vocabulary_data;
  const vocabulary_max = vocabulary_data.length;
  const [menuLink, setMenuLink] = useState(Data.data.menuLink);
  const [count, setCount] = useState(0);
  const [countWord, setCountWord] = useState(0);
  const [countChar, setCountChar] = useState(0);
  const [countHowMany, setCountHowMany] = useState(vocabulary_max);
  const [src, setSrc] = useState(file_path + first_vocabulary_data[2]);
  const [dispEnglish, setDispEnglish] = useState(first_vocabulary_data[0]);
  const [dispJapanese, setDispJapanese] = useState(first_vocabulary_data[1]);
  const [showModal, setShowModal] = useState(false);
  const [showStart, setShowStart] = useState(true);
  const [showSpeak, setShowSpeak] = useState(false);
  const [showSave, setShowSave] = useState(true);
  const [progressRate, setProgressRate] = useState(0);
  const [crazyWhite, setCrazyWhite] = useState("");
  var save_countWord = 0;
  var save_countChar = 0;
  var cnt = 0;
  var checkTexts;
  var startFlg = false;
  var progress = 0;

  const escFunction = useCallback((event) => {
    if (startFlg) {
      if (event.key === checkTexts[0].textContent) {
        checkTexts[0].className =
          "font-bold stext-7xl text-blue-800 font-serif";
        checkTexts.shift();
        save_countChar = save_countChar + 1;
        setCountChar(save_countChar);
        if (!checkTexts.length) {
          if (vocabulary_data.length === cnt + 1) {
            save_countWord =
              save_countWord +
              calcCountWords(
                document.getElementById("disp_english_text").textContent
              );
            setCountWord(save_countWord);
            //progress_rate = (save_countWord / vocabulary_max)*100;
            //setProgress(String(progress_rate) + "%");
            if (endless_flg) {
              cnt = 0;
              setCount(cnt + 1);
              if (random_flg) {
                setVocab(arrayShuffle(vocabulary_data));
              }
              setSrc(file_path + vocabulary_data[cnt][2]);
              setDispEnglish(vocabulary_data[cnt][0]);
              setDispJapanese(vocabulary_data[cnt][1]);
              speakNextEnglish();
              spanText();
            } else {
              finishTyping();
            }
          } else {
            save_countWord =
              save_countWord +
              calcCountWords(
                document.getElementById("disp_english_text").textContent
              );
            setCountWord(save_countWord);
            cnt = cnt + 1;
            setCount(cnt + 1);
            setSrc(file_path + vocabulary_data[cnt][2]);
            setDispEnglish(vocabulary_data[cnt][0]);
            setDispJapanese(vocabulary_data[cnt][1]);
            speakNextEnglish();
            spanText();
            progress = Math.floor((save_countWord / vocabulary_max) * 100);
            if (!endless_flg) {
              setProgressRate(progress);
            }
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

  function arrayShuffle(array) {
    for (var i = array.length - 1; 0 < i; i--) {
      // 0〜(i+1)の範囲で値を取得
      var r = Math.floor(Math.random() * (i + 1));
      // 要素の並び替えを実行
      var tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    return array;
  }

  const clickStart = () => {
    startFlg = true;
    if (random_flg) {
      setVocab(arrayShuffle(vocabulary_data));
    }else {
      setVocab(Data.data.level_1.vocabulary_data);
    }
    if (endless_flg) {
      setProgressRate(100);
    }
    if (crazy_flg) {
      setCrazyWhite("text-gray-600");
    }
    //cnt = cnt + 1;
    setCount(cnt + 1);
    setSrc(file_path + vocabulary_data[0][2]);
    setDispEnglish(vocabulary_data[0][0]);
    setDispJapanese(vocabulary_data[0][1]);
    speakNextEnglish();
    spanText();
    setShowStart(false);
    setShowSpeak(true);
    //document.getElementById("start_button").style.display = "none";
  };

  const spanText = () => {
    document.getElementById("disp_english_text").textContent = "";
    checkTexts = vocabulary_data[cnt][0].split("").map(function (value) {
      var span = document.createElement("span");
      span.textContent = value;
      document.getElementById("disp_english_text").appendChild(span);
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
    speech.text = vocabulary_data[count - 1][0];
    speechSynthesis.speak(speech);
  };

  const finishTyping = () => {
    startFlg = false;
    document.getElementById("disp_english_text").textContent = "";
    cnt = 0;
    setCount(0);
    setSrc(file_path + finish_vocabulary_data[2]);
    setDispEnglish(finish_vocabulary_data[0]);
    setDispJapanese(finish_vocabulary_data[1]);
    setShowSpeak(false);
    setProgressRate(100);
    setShowSave(false);
    setShowModal(true);
    //document.getElementById("speak_button").style.display = "none";
  };

  function calcCountWords(text) {
    return (
      (text += ".").replace(/(\,|\.|:|;|\!|\?|\s)+/g, " ").split(" ").length - 1
    );
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
          <Image src={src} height={200} width={324} alt="Sample" id="pic" />
        </div>
        <div className="text-center">
          {crazyFlg ? (
            <>
              <p
                className={"font-bold text-center text-6xl pt-1 text-white"}
                id="disp_english_text"
              >
                {dispEnglish}　
              </p>
            </>
          ) : (
            <p
              className={"font-bold text-center text-6xl pt-1 text-gray-600"}
              id="disp_english_text"
            >
              {dispEnglish}　
            </p>
          )}
          <p
            className="font-bold text-center text-3xl text-gray-900 pt-4"
            id="japanese_text"
          >
            {dispJapanese}
          </p>
          <div className="grid  grid-cols-12">
            <div className="text-center pt-4 col-start-4 col-span-6">
              <Progress
                percent={progressRate}
                status="yurupro"
                theme={{
                  yurupro: {
                    color: "#1D4ED8",
                  },
                }}
              />
            </div>
          </div>

          <div className="text-center pt-4">
            <div className="lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2">
              <button
                onClick={clickStart}
                style={{ display: showStart ? "" : "none" }}
                className="w-28 h-10 bg-blue-700 hover:bg-blue-800 text-white text-2xl px-4 rounded"
                id="start_button"
              >
                <div className="text-lg font-bold">Start</div>
              </button>
            </div>
            <div className="">
              <button
                onClick={speakButton}
                style={{ display: showSpeak ? "" : "none" }}
                className="w-28 h-10 bg-yellow-700 hover:bg-yellow-800 text-white text-2xl px-4 rounded"
                id="speak_button"
              >
                <div className="text-lg font-bold">Speak</div>
              </button>
            </div>
          </div>
        </div>
      </section>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    クリア！お疲れ様でした。
                  </h3>
                  <button
                    className="text-gray-600 background-transparent uppercase px-2 py-2 outline-none focus:outline-none ease-linear transition-all duration-150"
                    onClick={() => setShowModal(false)}
                  >
                    ×
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="my-4 text-gray-800 text-lg leading-relaxed">
                    <span className="text-green-600">
                      セーブ機能は会員限定機能
                    </span>
                    です。<br></br>
                    エンドレスモードやクレイジーモードに挑戦したい上級者は、
                    <br></br>
                    <span className="text-yellow-600">プレミアム会員</span>
                    がおすすめです！
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
                  <Link href={menuLink}>
                    <a>
                      <button
                        className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        セーブせずにメニューへ戻る
                      </button>
                    </a>
                  </Link>
                  <Link href={menuLink}>
                    <a>
                      <button
                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        セーブしてメニューへ戻る
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <section>
        <div className="grid  grid-cols-12 pt-3 text-base font-semibold">
          <div className="lg:col-start-4 lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2 text-center ">
            Words
          </div>
          <div className="lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2 text-center ">
            Charctors
          </div>
          <div className="lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2 text-center">
            Contents
          </div>
        </div>
        <div className="grid  grid-cols-12 pt-3 text-sm font-semibold text-gray-500">
          <div className="lg:col-start-4 lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2 text-center ">
            - {countWord} -
          </div>
          <div className="lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2 text-center ">
            - {countChar} -
          </div>
          <div className="lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2 text-center">
            - {countHowMany} -
          </div>
        </div>
      </section>
      <section>
        <div className="pt-3 text-center">
          <button
            //onClick={clickSave}
            className="w-28 h-10 bg-green-700 hover:bg-green-900 text-white px-3 rounded"
            id="save_button"
          >
            <div className="text-sm font-semibold">Save & Exit</div>
          </button>
        </div>
      </section>
      <section>
        <Account />
      </section>
    </>
  );
}
