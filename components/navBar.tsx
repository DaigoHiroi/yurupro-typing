import Link from 'next/link'
import {useEffect, useState} from 'react'
import Image from 'next/image'

const navBar = () => {
  const [active, setActive] = useState(false);
  const [word,setWord] = useState('0');
  const [char,setChar] = useState(`0`);
  const handleClick = () => {
    setActive(!active);
  };

  function getLocalStorage(){
    let getSaveData=localStorage.getItem(`YuruProSaveData`)
    if (!window.localStorage){
      return 1;
    }
    if(getSaveData){
      getSaveData = JSON.parse(getSaveData);
      setWord(getSaveData[0]);
      setChar(getSaveData[1]);
      return getSaveData;
    }
    let data = [0, 0];
    let json = JSON.stringify(data, undefined, 1);
    localStorage.setItem(`YuruProSaveData`, json);
    return data;
  }
  useEffect(() => {getLocalStorage()});
  return (
    <div className="pb-8">
      <nav className='flex items-center flex-wrap bg-gray-800'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
          <Image
            src="/ushi.svg"
            height={24}
            width={24}
            alt="英語タイピングアプリ"
            />
            <span className='text-sm text-white font-bold uppercase tracking-wide'>
              Yuru-PRO Typing™
            </span>
          </a>
        </Link>
        {/*TODO この下必要か確認*/}
        <button
          className=' inline-flex p-3 hover:bg-gray-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='/public/risu.svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
          {/*<label　className='text-xs lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 '>*/}
          {/*    GuestUser*/}
          {/*  </label>*/}
            <label　className='text-xs lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600'>
              単語数{word}
            </label>
            <label　className='text-xs lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600'>
              文字数{char}
            </label>
            {/* <label　className='text-xs lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white '>
              単語: 12345
            </label> */}
            {/* <label　className='text-xs lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white '>
              文字: 12345
            </label> */}
            <Link href='/'>
              <div className="px-2">
                <button>
              <a className='text-xs lg:inline-flex lg:w-auto w-full px-3 py-1 rounded text-white font-bold items-center justify-center bg-indigo-600 hover:bg-indigo-700 hover:text-white'>
                Home
              </a>
                </button>
              </div>
            </Link>
            {/* <Link href='/'>
              <a className='text-xs lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
                My page
              </a>
            </Link> */}
            {/* <Link href='/'>
              <a className='text-xs lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
                About us
              </a>
            </Link> */}
        {/*    <Link href="/login/login">*/}
        {/*    <a className='text-xs lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>*/}
        {/*  ログイン*/}
        {/*</a>*/}
        {/*</Link>*/}
        {/*<Link href="/login/login">*/}
        {/*<a className='text-xs lg:inline-flex lg:w-auto w-full px-2 py-1 rounded text-white font-bold items-center justify-center bg-indigo-600 hover:bg-indigo-700 hover:text-white'>*/}
        {/*  アカウント作成*/}
        {/*</a>*/}
        {/*</Link>*/}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navBar;