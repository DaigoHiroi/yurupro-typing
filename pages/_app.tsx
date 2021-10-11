import '../styles/globals.css'
import React from 'react'
import Layout from '../components/mainLayout'
import NextProgress from 'nextjs-progressbar'

function App({ Component, pageProps }) {
  return pageProps.layout ? (
    <Layout>
      <Component {...pageProps} />
      <NextProgress />
    </Layout>
  ) : (
    <Component {...pageProps} />
    //レイアウトなし
  )
}
export default App