import Head from 'next/head';
import Footer from './footer';
import NavBar from './navBar';

function mainLayout({ children }) {
    return (
        <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        <main role="main">
            {children}
        </main>
        <Footer />
      </>
    )
}

export default mainLayout;