import Image from "next/image";
import Link from "next/link";
import styles from "styles/Home.module.css";

const CourseSelect = (props) => {
  return (
    <>
      <div className={styles.grid}>
          <h2 className="font-bold text-center text-3xl text-green-600 pb-0">
            TOEIC®︎単語
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
                    alt="名詞を学習する。"
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

          <Link href="#">
            {/* /toeic/menus/verb */}
            <a>
              {/* 開発中ということを示すため、bg-gray-100のところを300に色を暗くしている。 */}
              <div className="bg-gray-300 border-red-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
                <div className="w-16 h-16 object-cover p-1">
                  <Image
                    src="/verb.svg"
                    height={48}
                    width={48}
                    alt="動詞を学習する"
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

          <Link href="#">
            {/* /toeic/menus/adjective */}
            <a>
              {/* 開発中ということを示すため、bg-gray-100のところを300に色を暗くしている。 */}
              <div className="bg-gray-300 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
                <div className="w-16 h-16 object-cover p-1">
                  <Image
                    src="/adjective.svg"
                    height={42}
                    width={42}
                    alt="形容詞を学習する"
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

          <Link href="#">
            {/* /toeic/menus/adverb */}
            <a>
              {/* 開発中ということを示すため、bg-gray-100のところを300に色を暗くしている。 */}
              <div className="bg-gray-300 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
                <div className="w-16 h-16 object-cover p-1">
                  <Image
                    src="/adverb.svg"
                    height={48}
                    width={48}
                    alt="副詞を学習する"
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

        <div className={styles.grid}>
          <h2 className="font-bold text-center text-3xl text-green-600 pb-0">
            YURU-PRO™️長文
          </h2>
        </div>

        <div className={styles.grid}>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-4">
          <Link href="#">
            <a>
              <div className="bg-gray-300 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                <div className="w-16 h-16 object-cover p-1">
                  <Image
                    src="/blue.svg"
                    height={48}
                    width={48}
                    alt="Level1長文"
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs text-blue-900 dark:text-gray-300 font-bold">
                    Daily
                  </p>
                  <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                    <span className="text-blue-900">日常会話</span>
                    をトレーニング！
                  </p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="#">
            {/* /toeic/menus/verb */}
            <a>
              {/* 開発中ということを示すため、bg-gray-100のところを300に色を暗くしている。 */}
              <div className="bg-gray-300 border-red-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
                <div className="w-16 h-16 object-cover p-1">
                  <Image
                    src="/red.svg"
                    height={62}
                    width={62}
                    alt="長文を学習する"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs text-red-900 dark:text-gray-300 font-bold">
                    Business
                  </p>
                  <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                    <span className="text-red-900">ビジネス会話</span>をトレーニング！
                  </p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="#">
            {/* /toeic/menus/adjective */}
            <a>
              {/* 開発中ということを示すため、bg-gray-100のところを300に色を暗くしている。 */}
              <div className="bg-gray-300 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
                <div className="w-16 h-16 object-cover p-1">
                  <Image
                    src="/green.svg"
                    height={42}
                    width={42}
                    alt="形容詞を学習する"
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs text-green-900 dark:text-gray-300 font-bold">
                    IT
                  </p>
                  <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                    <span className="text-green-900">IT分野</span>
                    をトレーニング！
                  </p>
                </div>
              </div>
            </a>
          </Link>

          <Link href="#">
            {/* /toeic/menus/adverb */}
            <a>
              {/* 開発中ということを示すため、bg-gray-100のところを300に色を暗くしている。 */}
              <div className="bg-gray-300 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
                <div className="w-16 h-16 object-cover p-1">
                  <Image
                    src="/yellow.svg"
                    height={48}
                    width={48}
                    alt="長文を学習する"
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs text-yellow-900 dark:text-gray-300 font-bold">
                    Travel
                  </p>
                  <p className="text-xs text-black dark:text-gray-100 text-justify font-semibold">
                    <span className="text-yellow-900">旅行会話</span>
                    をトレーニング！
                  </p>
                </div>
              </div>
            </a>
          </Link>

          </div>
          </div>
    </>
  );
};

export default CourseSelect;
