import '../styles/globals.css'
import React from 'react'
import Layout from '../components/layout'
import NextNprogress from 'nextjs-progressbar'

function App({ Component, pageProps }) {
  return pageProps.layout ? (
    <Layout>
      <Component {...pageProps} />
      <NextNprogress /> 
    </Layout>
  ) : (
    <Component {...pageProps} /> 
    //レイアウトなし
  )
}
export default App