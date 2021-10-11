import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export const getServerSideProps = async (context) => ({
    props: {
      layout: true // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
    }
  })

export default function one(){
    return (
        <>
        <Head>
            <title>ログイン画面</title>
        </Head>
        <div className="flex justify-center">この画面は開発中のものです。ログイン/アカウントを作成することはできません。</div>
        <div className="h-screen bg-white flex flex-col space-y-4 justify-center items-center">
  <div className="bg-white w-96 shadow-xl rounded p-5">
    <h1 className="text-3xl font-medium">ログイン画面</h1>
    <p className="text-sm">パスワードとIDを入力してください。</p>
    
    <form className="space-y-5 mt-5">
      <input type="text" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="Email" />
      <div className="w-full flex items-center border border-gray-800 rounded px-3">
        <input type="password" className="w-4/5 h-12" placeholder="Password" />
        <span className="text-blue-700 hover:bg-blue-400 rounded-md px-3">表示</span>
      </div>

      <div className="">
        <a href="#!" className="font-medium text-blue-900 hover:bg-blue-300 rounded-md p-2">パスワードをお忘れですか？</a>
      </div>

      <button className="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium">ログイン</button>
    </form>
  </div>
</div>
        </>
    )
}