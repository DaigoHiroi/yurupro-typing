var disp_english_text = document.getElementById("english_text");
var disp_japanese_text = document.getElementById("japanese_text");
var disp_count_word = document.getElementById("count_word");
var disp_count_char = document.getElementById("count_char");
var disp_max_word = document.getElementById("count_max_word");
//var save_count_word = document.getElementById('');
//var save_count_char document.getElementById('');
var disp_pic = document.getElementById("pic");

//計算用の変数
var culc_count_word = 0;
var culc_count_char = 0;
var culc_count_num = 0;
var image_file_path = ""; //prop対象
//英語 日本語 画像ファイル名（拡張子あり） //prop対象
const vocabulary_data = [
  ["town", "町", "sampleA.jpg"],
  ["apple", "りんご", "sampleB.jpg"],
  ["town", "まち", "sampleB.jpg"],
  ["town", "町", "sampleA.jpg"],
  ["town", "町", "sampleA.jpg"],
  [" ", "クリア！（スペースキーで最初に戻る）", "sampleA.jpg"],
];

var checkTexts = [""];
//単語数の最大値を取得・保持・表示
var vocabulary_max = 0;

window.onload = function () {
  vocabulary_max = vocabulary_data.length - 1;
  disp_max_word.textContent = String(vocabulary_max);
  //getImages();
};

const speech = new SpeechSynthesisUtterance();
speech.lang = "en-US";

//単語数を計算する計算用関数
function countWords(text) {
  return (
    (text += ".").replace(/(\,|\.|:|;|\!|\?|\s)+/g, " ").split(" ").length - 1
  );
}

//画像プリロード用関数。全て画像を取得
function getImages() {
  var i = 0;
  for (i = 0; i < vocabulary_data.length; i++) {
    var img = document.createElement("img");
    img.src = image_file_path + "/" + vocabulary_data[i][2];
  }
}

//「Start」ボタンを押したときの処理」表示切り替え
document.getElementById("start_button").onclick = function playStart() {
  createText();
  document.getElementById("start_button").style.display = "none";
  document.getElementById("caution").style.display = "none";
};

function createText() {
  //最後に呼ばれたとき。
  if (vocabulary_data.length == culc_count_num) {
    culc_count_num = 0;
    //配列数で表示しているが、最後の配列要素は「クリア」というカウントしてはいけないものなので、
    //引いている。
    culc_count_char = culc_count_char - 1;
    culc_count_word = culc_count_word - 1;
    disp_count_char.textContent = culc_count_char;
    disp_count_word.textContent = culc_count_word;
    //save_count_char.value = culc_count_char;
    //save_count_word.value = culc_count_word;

    //このタイミングでプログレスバーもリセット。
    resetProgress();
  }
  //最後以外
  var num = culc_count_num;
  culc_count_num = culc_count_num + 1;
  disp_pic.src = image_file_path + "/" + vocabulary_data[num][2];

  speechSynthesis.cancel();
  speech.text = vocabulary_data[num][0];
  speechSynthesis.speak(speech);
  sleep(500);
  //文字列を削除してから次の文字列を作成.
  disp_english_text.textContent = "";
  disp_japanese_text.textContent = "";

  checkTexts = vocabulary_data[num][0].split("").map(function (value) {
    var span = document.createElement("span");
    span.textContent = value;
    disp_english_text.appendChild(span);
    return span;
  });

  disp_japanese_text.textContent = vocabulary_data[num][1];
}

document.addEventListener("keydown", keyDown);
function keyDown(e) {
  if (e.key === checkTexts[0].textContent) {
    checkTexts[0].className = "italic stext-7xl text-blue-700";
    checkTexts.shift();
    culc_count_char = culc_count_char + 1;
    disp_count_char.textContent = culc_count_char;
    //save_count_char.value = culc_count_char;
    if (!checkTexts.length) {
      culc_count_word = culc_count_word + countWords(disp_english_text.textContent);
      disp_count_word.textContent = String(culc_count_word);
      //save_count_word.value = culc_count_word;
      //プログレスバー更新
      updateProgress();
      createText();
    }
    window.onkeydown = function (e) {
      return !(e.keyCode == 32);
    };
  }
}

//プログレスバーの進捗用変数
var bar_point = 0;
var result_progress = 0;
function updateProgress() {
  bar_point += 1;
  result_progress = Math.round((bar_point / vocabulary_max) * 100);
  document.getElementById("myProgress").value = result_progress;
  document.getElementById("myProgress").innerText = result_progress;
}

function resetProgress() {
  bar_point = 0;
  document.getElementById("myProgress").value = 0;
  document.getElementById("myProgress").innerText = 0 + "%";
}

function sleep(waitMsec) {
    var startMsec = new Date();
  
    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
  }


console.log("aaaa");
