import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import Link from "next/link";

export const getServerSideProps = async (context) => ({
  props: {
    layout: true, // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
  },
});

export default function Home() {
  return (
    <div className="grid-cols-12 gap-4">
      <Head>
        <title>Yuru-Pro Typing ~Toeic®︎などの英語学習タイピングアプリ~</title>
        <meta name="description" content="Let's try TOEIC TYPING!!" />
        <meta property="og:aaa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="font-bold text-center text-5xl text-yellow-700">
          Yuru-Pro<span className="text-blue-900">Typing</span>
        </h1>

        <p className="font-bold text-center text-xl text-gray-500">
          英語学習超特化型タイピングサイト
        </p>

        <div className={styles.grid}>

        <h2 className="font-bold text-center text-3xl text-green-600 pb-0">
            TOEIC®︎コース
          </h2>
          </div>
          <div className={styles.grid}>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-4">
            <Link href="/toeic/menus/noun">
              <a>
                <div className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-16 h-16 object-cover p-1">
                    <Image
                      src="/noun.svg"
                      height={48}
                      width={48}
                      alt="An SVG of an risu"
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-blue-900 dark:text-gray-300 font-bold">
                      Noun
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      <span className="text-blue-900">名詞</span>
                      をトレーニング！
                    </p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/first-post">
              <a>
                <div className="bg-gray-100 border-red-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-16 h-16 object-cover p-1">
                    <Image
                      src="/verb.svg"
                      height={48}
                      width={48}
                      alt="An SVG of an verb"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-red-900 dark:text-gray-300 font-bold">
                      Verb
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      <span className="text-red-900">動詞</span>をトレーニング！
                    </p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/first-post">
              <a>
                <div className="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-16 h-16 object-cover p-1">
                    <Image
                      src="/adjective.svg"
                      height={42}
                      width={42}
                      alt="An SVG of an risu"
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-green-900 dark:text-gray-300 font-bold">
                      Adjective
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      <span className="text-green-900">形容詞</span>
                      をトレーニング！
                    </p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/first-post">
              <a>
                <div className="bg-gray-100 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-16 h-16 object-cover p-1">
                    <Image
                      src="/adverb.svg"
                      height={48}
                      width={48}
                      alt="An SVG of an risu"
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-yellow-900 dark:text-gray-300 font-bold">
                      Adverb
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      <span className="text-yellow-900">副詞</span>
                      をトレーニング！
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>

        <section>
        <div className="text-center grid-cols-12">
          <h1 className="mb-4 font-bold text-green-700 text-2xl pt-20">
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
      </main>
    </div>
  );
}
