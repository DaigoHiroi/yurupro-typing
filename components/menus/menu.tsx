import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";

export const getServerSideProps = async (context) => ({
  props: {
    layout: true, // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
  },
});

const Menu = (props) => {
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
          { props.title }
        </p>
        </div>

        <section>
          <h2 className="font-bold text-center text-2xl text-gray-600 pt-10 pb-2">
            Level 1
          </h2>
          <div className="grid grid-cols-12 gap-0.5">
            <div className="lg:col-start-4 lg:col-span-1 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2">
            <Link href="/toeic/play_noun/level_1_regular">
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
            <Link href="/toeic/play_noun/level_1_regular">
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
            <Link href="/toeic/play_noun/level_1_crazy">
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
            <Link href="/toeic/play_noun/level_1_book">
              <a>
              <div className="bg-gray-100 border-black dark:bg-black bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-gray-400 dark:hover:bg-gray-400 hover:border-transparent | transition-colors duration-500">
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
              <div className="bg-gray-100 border-blue-900  bg-opacity-95 border-opacity-60 | p-3 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-blue-600  hover:border-transparent | transition-colors duration-500">
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
        </div>
  );
}

export default Menu;