import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import ButtonExit from "components/buttonExit";
// import IconExit from "components/iconExit";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import styles from 'styles/Play.module.css';

export const getServerSideProps = async (props) => ({
    props: {
        layout: true, // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
    },
});

export default function Typing(props) {
    const [random_flg, setRandom_flg] = useState(props.isRandom);
    const [endless_flg, setEndless_flg] = useState(props.isEndless);
    const [crazy_flg, setCrazy_flg] = useState(props.isCrazy);
    const file_path = props.file_path;
    const [crazyFlg, setCrazyFlg] = useState(crazy_flg);
    const [vocabulary_data, setVocab] = useState(props.vocabulary_data);

    const first_vocabulary_data = props.first_vocabulary_data;
    const finish_vocabulary_data = props.finish_vocabulary_data;
    const vocabulary_max = props.vocabulary_max;
    const [menuLink, setMenuLink] = useState(props.menuLink);
    const [count, setCount] = useState(0);
    const [countWord, setCountWord] = useState(0);
    const [countChar, setCountChar] = useState(0);
    const [countHowMany, setCountHowMany] = useState(vocabulary_max);
    const [src, setSrc] = useState(file_path + first_vocabulary_data[2]);
    const [dispEnglish, setDispEnglish] = useState(first_vocabulary_data[0]);
    const [dispJapanese, setDispJapanese] = useState(first_vocabulary_data[1]);
    const [showStart, setShowStart] = useState(true);
    const [showSpeak, setShowSpeak] = useState(false);
    const [showSave, setShowSave] = useState(true);
    const [progressRate, setProgressRate] = useState(0);
    const [crazyWhite, setCrazyWhite] = useState("");
    let save_countWord = 0;
    let save_countChar = 0;
    let cnt = 0;
    var checkTexts;
    let startFlg = false;
    let progress = 0;
    let tmpCountWords = 0;
    let localSaveChar = 0;

    const escFunction = useCallback((event) => {
        if (startFlg && event.key === checkTexts[0].textContent) {
            checkTexts[0].className =
                "font-bold text-7xl text-blue-800 font-serif";
            checkTexts.shift();
            save_countChar = save_countChar + 1;
            localSaveChar = localSaveChar + 1;
            setCountChar(save_countChar);
            if (checkTexts.length) {
                return 0;
            }
            if (vocabulary_data.length === cnt + 1) {
                tmpCountWords = calcCountWords(document.getElementById("disp_english_text").textContent)
                save_countWord = save_countWord + tmpCountWords;
                setCountWord(save_countWord);
                saveLocalStorage(tmpCountWords,localSaveChar);
                localSaveChar = 0;
                if (!endless_flg) {
                    finishTyping();
                } else {
                    document.removeEventListener("keydown", escFunction, false);
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
                    document.addEventListener("keydown", escFunction, false);
                }
            } else {
                document.removeEventListener("keydown", escFunction, false);
                tmpCountWords = calcCountWords( document.getElementById("disp_english_text").textContent)
                save_countWord = save_countWord + tmpCountWords;
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
                saveLocalStorage(tmpCountWords,localSaveChar);
                localSaveChar = 0;
                document.addEventListener("keydown", escFunction, false);
            }

            window.onkeydown = function (event) {
                return !(event.keyCode == 32);
            };
        }
        if (event.keyCode === 27) {
            // キーコードを判定して何かする。
            console.log("Esc Key is pressed!");
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
            setVocab([]);
        }
    }, [escFunction]);

    function arrayShuffle(array) {
        for (let i = array.length - 1; 0 < i; i--) {
            // 0〜(i+1)の範囲で値を取得
            let r = Math.floor(Math.random() * (i + 1));
            // 要素の並び替えを実行
            let tmp = array[i];
            array[i] = array[r];
            array[r] = tmp;
        }
        return array;
    }

    const clickStart = () => {
        startFlg = true;
        if (random_flg) {
            setVocab(arrayShuffle(vocabulary_data));
        }
        if (endless_flg) {
            setProgressRate(100);
        }
        if (crazy_flg) {
            setCrazyWhite("text-gray-600");
        }
        //cnt = cnt + 1;
        //プリロード
        vocabulary_data.forEach(function(element){
            setSrc(file_path + element[2]);
        });
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
        // setDispEnglish("");
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
        document.getElementById("disp_english_text").textContent = finish_vocabulary_data[0];
        cnt = 0;
        setCount(0);
        setSrc(file_path + finish_vocabulary_data[2]);
        // setDispEnglish(finish_vocabulary_data[0]);
        setDispJapanese(finish_vocabulary_data[1]);
        setShowSpeak(false);
        setProgressRate(100);
        setShowSave(false);
        // setShowModal(true);
        //document.getElementById("speak_button").style.display = "none";
    };

    function calcCountWords(text) {
        return (
            (text += ".").replace(/(\,|\.|:|;|\!|\?|\s)+/g, " ").split(" ").length - 1
        );
    }

    function saveLocalStorage(wordCount:number, charCount:number){
        let getSaveData=localStorage.getItem(`YuruProSaveData`)
        if (!window.localStorage){
            return 1;
        }
        if(getSaveData){
            getSaveData = JSON.parse(getSaveData)
            let data = [getSaveData[0] + wordCount, getSaveData[1] + charCount];
            let json = JSON.stringify(data, undefined, 1);
            localStorage.setItem(`YuruProSaveData`, json);
            return 0;
        }
        let data = [wordCount, charCount];
        let json = JSON.stringify(data, undefined, 1);
        localStorage.setItem(`YuruProSaveData`, json);
        return 0;
    }

    return (
        <>
            <section>
                <div className="text-center pt-8">
                    <Image src={src} height={200} width={324} alt="EnglishTyping" className={styles.pic}/>
                {/* quality={60}*/}
                </div>
                <div className="text-center">
                    {crazyFlg ? (
                        <>
                            <p
                                className={"font-bold text-center text-6xl pt-1 text-white"}
                                id="disp_english_text"
                            >
                                {dispEnglish}<> </>
                            {/* {dispEnglish}の後ろの空白を消すとなぜかバグる。最初の単語の色がタイピング後も変わらなくなる。死ぬほどハマった*/}
                            </p>
                        </>
                    ) : (
                        <p
                            className={"font-bold text-center text-6xl pt-1 text-gray-600"}
                            id="disp_english_text"
                        >
                            {dispEnglish}<> </>
                            {/* {dispEnglish}の後ろの空白を消すとなぜかバグる。死ぬほどハマった*/}
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
            <section>
                <div className="grid  grid-cols-12 pt-3 text-base font-bold">
                    <div className="lg:col-start-4 lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2 text-center ">
                        Words
                    </div>
                    <div className="lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2 text-center ">
                        Characters
                    </div>
                    <div className="lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2 text-center">
                        Contents
                    </div>
                </div>
                <div className="grid  grid-cols-12 pt-3 text-sm font-bold text-gray-500">
                    <div className="lg:col-start-4 lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2 text-center ">
                        {countWord}
                    </div>
                    <div className="lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2 text-center ">
                        {countChar}
                    </div>
                    <div className="lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2 text-center">
                        {countHowMany}
                    </div>
                </div>
            </section>
            <section className="pt-4">
                <ButtonExit url={menuLink}/>
            </section>
        </>
    );
}
