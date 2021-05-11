import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from './header'
import Footer from './footer'
import { Navbar } from './Navbar';
import styles from "styles/Home.module.css";

function Layout({ children}) {
    return (
        <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar />
        <main role="main">
            {children}
        </main>
        <Footer />
      </>
    )
}

export default Layout;