import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export const getServerSideProps = async (context) => ({
  props: {
    layout: true // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
  }
})

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Toeic®︎などの英語学習タイピングアプリ</title>
        <meta name="description" content="Let's try TOEIC TYPING!!" />
        <meta property="og:aaa"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className="font-bold text-center text-6xl text-yellow-700">Yuru-Pro<span className="text-blue-900">Typing</span></h1>


        <p className={styles.description}>
          早く完成させたい！
        </p>

        <div className={styles.grid}>
        <Link  href="/first-post"><a><h2>このページ</h2><p>this Page!</p></a></Link>
        <Link  href="test/one"><a><h2>テストページ</h2><p>test Page!</p></a></Link>
        </div>
        <div className={styles.grid}>
        <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Noun &rarr;</h2>
            <p>名詞を学びます。</p>
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Verb &rarr;</h2>
            <p>動詞を学びます。</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Adjactive &rarr;</h2>
            <p>形容詞を学びます。</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Adverb &rarr;</h2>
            <p>
               副詞を学びます。
            </p>
          </a>
        </div>

        <div className={styles.grid}>

  <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-8 px-8">

  <Link  href="/first-post"><a>
    <div className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
      <img className="w-16 h-16 object-cover" src="https://milenyo.net/wp-content/uploads/2020/05/netflix-n-logo-png.png" alt="" />
      <div className="flex flex-col justify-center">
      <p className="text-gray-900 dark:text-gray-300 font-semibold">Adverb</p>
      <p className="text-black dark:text-gray-100 text-justify font-semibold">副詞を学びます。</p>
      </div>
    </div>
    </a>
    </Link>

    <Link  href="/first-post"><a>
    <div className="bg-gray-100 border-red-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
      <img className="w-16 h-16 object-cover" src="https://milenyo.net/wp-content/uploads/2020/05/netflix-n-logo-png.png" alt="" />
      <div className="flex flex-col justify-center">
      <p className="text-gray-900 dark:text-gray-300 font-semibold">Adverb</p>
      <p className="text-black dark:text-gray-100 text-justify font-semibold">副詞を学びます。</p>
      </div>
    </div>
    </a>
    </Link>

    <Link  href="/first-post"><a>
    <div className="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
      <img className="w-16 h-16 object-cover" src="https://milenyo.net/wp-content/uploads/2020/05/netflix-n-logo-png.png" alt="" />
      <div className="flex flex-col justify-center">
      <p className="text-gray-900 dark:text-gray-300 font-semibold">Adverb</p>
      <p className="text-black dark:text-gray-100 text-justify font-semibold">副詞を学びます。</p>
      </div>
    </div>
    </a>
    </Link>

    <Link  href="/first-post"><a>
    <div className="bg-gray-100 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
      <img className="w-16 h-16 object-cover" src="https://milenyo.net/wp-content/uploads/2020/05/netflix-n-logo-png.png" alt="" />
      <div className="flex flex-col justify-center">
      <p className="text-gray-900 dark:text-gray-300 font-semibold">Adverb</p>
      <p className="text-black dark:text-gray-100 text-justify font-semibold">副詞を学びます。</p>
      </div>
    </div>
    </a>
    </Link>
</div>


  </div>






      </main>
      <section className="h-screen w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
        <h1 className="mb-4 text-green-500 text-3xl">サンプル</h1>
        <p className="mb-2 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis consequatur eius hic ipsam nostrum omnis optio! Doloribus quaerat quis ratione? At, maiores voluptas? Eveniet odio omnis repellendus sapiente voluptatibus.</p>
        <button className="btn-blue">Let's Start!!</button>
      </section>

    </div>
  )
}
