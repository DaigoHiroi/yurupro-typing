import Head from "next/head";
import Data from "./data.json";
import "react-sweet-progress/lib/style.css";
import Typing from "components/typing/templates/typing";


export const getServerSideProps = async (props) => ({
  props: {
    layout: true, // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
  },
});

export default function PlayRandom() {
  const isRandom = true;
  const isEndless = false;
  const isCrazy = false;
  const file_path = Data.data.level_3.file_path;
  const vocabulary_data= Data.data.level_3.vocabulary_data_rdm;
  const first_vocabulary_data = Data.data.first_vocabulary_data;
  const finish_vocabulary_data = Data.data.finish_vocabulary_data;
  const vocabulary_max = vocabulary_data.length;
  const menuLink = Data.data.menuLink;

  return (
      <>
        <Head>
          <title>Yuru-Pro_Typing 名詞 level 3</title>
          <meta name="description" content="Let's try TOEIC TYPING!!" />
          <meta property="タイピングと英語を学習できるWebアプリ" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="grid-cols-12 gap-4">
          <h1 className="font-bold text-center text-5xl text-blue-900">
            Level 3 <span className="text-yellow-700 text-4xl">【Random】</span>
          </h1>

          <p className="font-bold text-center text-2xl text-gray-500">
            TOEIC®︎名詞コース
          </p>
        </div>

        <Typing isRandom={isRandom}
                isEndless={isEndless}
                isCrazy={isCrazy}
                file_path={file_path}
                vocabulary_data={vocabulary_data}
                first_vocabulary_data={first_vocabulary_data}
                finish_vocabulary_data={finish_vocabulary_data}
                vocabulary_max={vocabulary_max}
                menuLink={menuLink}
        />
      </>
  );
}
