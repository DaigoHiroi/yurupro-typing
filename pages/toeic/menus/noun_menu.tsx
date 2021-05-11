import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";

export const getServerSideProps = async (context) => ({
  props: {
    layout: true, // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
  },
});

export default function Menu() {
  return (
    <div className="grid">
      <Head>
        <title>Yuru-Pro_Typing 名詞 レベル選択</title>
        <meta name="description" content="Let's try TOEIC TYPING!!" />
        <meta property="og:aaa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid-cols-12 gap-4">
        <h1 className="font-bold text-center text-5xl text-yellow-700">
          Level<span className="text-blue-900">Select</span>
        </h1>

        <p className="font-bold text-center text-xl text-gray-500">
          TOEIC®︎名詞コース
        </p>

        <section>
          <h2 className="font-bold text-center text-2xl text-gray-600 pt-10 pb-2">
            Level 1
          </h2>
          <div className="grid grid-cols-12 gap-0.5">
            <div className="lg:col-start-4 lg:col-span-1 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2">
            <Link href="/toeic/play_noun/level_1">
              <a>
                <div className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/regular.svg"
                      height={32}
                      width={32}
                      alt="通常並び"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-blue-900 dark:text-gray-300 font-bold">
                      Regular
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      通常
                    </p>
                  </div>
                </div>
              </a>
            </Link>
            </div>

            <div className="lg:col-span-1 md:col-span-3 sm:col-span-2">
            <Link href="/first-post">
              <a>
                <div className="bg-gray-100 border-red-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/random.svg"
                      height={48}
                      width={48}
                      alt="ランダム並び"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-red-900 dark:text-gray-300 font-bold">
                      Random
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      ランダム
                    </p>
                  </div>
                </div>
              </a>
            </Link>
            </div>

            <div className="lg:col-span-1 md:col-span-3 sm:col-span-2">
            <Link href="/first-post">
              <a>
                <div className="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/crazy.svg"
                      height={16}
                      width={16}
                      alt="目隠しランダム"
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-green-900 dark:text-gray-300 font-bold">
                      Crazy
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      目隠し
                    </p>
                  </div>
                </div>
              </a>
            </Link>
            </div>

            <div className="lg:col-span-1 md:col-span-3 sm:col-span-2">
            <Link href="/first-post">
              <a>
                <div className="bg-gray-100 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/endless.svg"
                      height={32}
                      width={32}
                      alt="ランダムエンドレス"
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-yellow-900 dark:text-gray-300 font-bold">
                      Endless
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      無制限
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="lg:col-span-1 md:col-span-3 sm:col-span-2">
            <Link href="/toeic/play_noun/level_1_noun_book">
              <a>
                <div className="bg-gray-100 border-black dark:bg-black bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-gray-500 dark:hover:bg-gray-800 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/book.svg"
                      height={32}
                      width={32}
                      alt="単語帳"
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-gray-900 dark:text-gray-300 font-bold">
                      Book
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      単語帳
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="lg:col-span-1 md:col-span-3 sm:col-span-2">
            <Link href="/first-post">
              <a>
                <div className="bg-gray-100 border-blue-900 dark:bg-blue-900 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-blue-700 dark:hover:bg-blue-700 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/list.svg"
                      height={32}
                      width={32}
                      alt="単語一覧"
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-blue-900 dark:text-blue-900 font-bold">
                      List
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      一覧
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>

          </div>
        </section>

        <section>
          <h2 className="font-bold text-center text-2xl text-gray-600 pt-10 pb-2">
            Level 2
          </h2>
          <div className="grid grid-cols-12 gap-0.5">
            <div className="lg:col-start-5 lg:col-span-1 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2">
            <Link href="/toeic/play_noun/level_1">
              <a>
                <div className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/regular.svg"
                      height={32}
                      width={32}
                      alt="通常並び"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-blue-900 dark:text-gray-300 font-bold">
                      Regular
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      通常
                    </p>
                  </div>
                </div>
              </a>
            </Link>
            </div>

            <div className="lg:col-span-1 md:col-span-3 sm:col-span-2">
            <Link href="/first-post">
              <a>
                <div className="bg-gray-100 border-red-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/random.svg"
                      height={48}
                      width={48}
                      alt="ランダム並び"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-red-900 dark:text-gray-300 font-bold">
                      Random
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      ランダム
                    </p>
                  </div>
                </div>
              </a>
            </Link>
            </div>

            <div className="lg:col-span-1 md:col-span-3 sm:col-span-2">
            <Link href="/first-post">
              <a>
                <div className="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/crazy.svg"
                      height={16}
                      width={16}
                      alt="目隠しランダム"
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-green-900 dark:text-gray-300 font-bold">
                      Crazy
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      目隠し
                    </p>
                  </div>
                </div>
              </a>
            </Link>
            </div>

            <div className="lg:col-span-1 md:col-span-3 sm:col-span-2">
            <Link href="/first-post">
              <a>
                <div className="bg-gray-100 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/endless.svg"
                      height={32}
                      width={32}
                      alt="ランダムエンドレス"
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-yellow-900 dark:text-gray-300 font-bold">
                      Endless
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      無制限
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-center text-2xl text-gray-600 pt-10 pb-2">
            Level 3
          </h2>
          <div className="grid grid-cols-12 gap-0.5">
            <div className="lg:col-start-5 lg:col-span-1 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2">
            <Link href="/toeic/play_noun/level_1">
              <a>
                <div className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/regular.svg"
                      height={32}
                      width={32}
                      alt="通常並び"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-blue-900 dark:text-gray-300 font-bold">
                      Regular
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      通常
                    </p>
                  </div>
                </div>
              </a>
            </Link>
            </div>

            <div className="lg:col-span-1 md:col-span-3 sm:col-span-2">
            <Link href="/first-post">
              <a>
                <div className="bg-gray-100 border-red-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/random.svg"
                      height={48}
                      width={48}
                      alt="ランダム並び"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-red-900 dark:text-gray-300 font-bold">
                      Random
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      ランダム
                    </p>
                  </div>
                </div>
              </a>
            </Link>
            </div>

            <div className="lg:col-span-1 md:col-span-3 sm:col-span-2">
            <Link href="/first-post">
              <a>
                <div className="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/crazy.svg"
                      height={16}
                      width={16}
                      alt="目隠しランダム"
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-green-900 dark:text-gray-300 font-bold">
                      Crazy
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      目隠し
                    </p>
                  </div>
                </div>
              </a>
            </Link>
            </div>

            <div className="lg:col-span-1 md:col-span-3 sm:col-span-2">
            <Link href="/first-post">
              <a>
                <div className="bg-gray-100 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/endless.svg"
                      height={32}
                      width={32}
                      alt="ランダムエンドレス"
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-yellow-900 dark:text-gray-300 font-bold">
                      Endless
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      無制限
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-center text-2xl text-gray-600 pt-10 pb-2">
            Level 4
          </h2>
          <div className="grid grid-cols-12 gap-0.5">
            <div className="lg:col-start-5 lg:col-span-1 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2">
            <Link href="/toeic/play_noun/level_1">
              <a>
                <div className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/regular.svg"
                      height={32}
                      width={32}
                      alt="通常並び"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-blue-900 dark:text-gray-300 font-bold">
                      Regular
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      通常
                    </p>
                  </div>
                </div>
              </a>
            </Link>
            </div>

            <div className="lg:col-span-1 md:col-span-3 sm:col-span-2">
            <Link href="/first-post">
              <a>
                <div className="bg-gray-100 border-red-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/random.svg"
                      height={48}
                      width={48}
                      alt="ランダム並び"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-red-900 dark:text-gray-300 font-bold">
                      Random
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      ランダム
                    </p>
                  </div>
                </div>
              </a>
            </Link>
            </div>

            <div className="lg:col-span-1 md:col-span-3 sm:col-span-2">
            <Link href="/first-post">
              <a>
                <div className="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/crazy.svg"
                      height={16}
                      width={16}
                      alt="目隠しランダム"
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-green-900 dark:text-gray-300 font-bold">
                      Crazy
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      目隠し
                    </p>
                  </div>
                </div>
              </a>
            </Link>
            </div>

            <div className="lg:col-span-1 md:col-span-3 sm:col-span-2">
            <Link href="/first-post">
              <a>
                <div className="bg-gray-100 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
                  <div className="w-8 h-8 object-cover p-1">
                    <Image
                      src="/endless.svg"
                      height={32}
                      width={32}
                      alt="ランダムエンドレス"
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-yellow-900 dark:text-gray-300 font-bold">
                      Endless
                    </p>
                    <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                      無制限
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          </div>
        </section>

        <section>
          <div className={styles.main}>
            <h1 className="mb-4 font-bold text-green-700 text-2xl pt-6">
              アカウントを作成しよう！
            </h1>
            <p className="mb-2 text-center">
              このタイピングサイトはアカウントを作成することで、これまでのタイピングしたデータを保存できます。
            </p>
            <p>1分でアカウントを作成して、最大限楽しみましょう！</p>
            <div className="pt-6">
              <button className="w-26 h-12 bg-blue-800 font-bold hover:bg-blue-700 text-white py-2 px-4 rounded">
                <div className="text-sm">
                アカウント作成
                </div>
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
