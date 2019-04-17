import React from 'react'
import Head from 'next/head'
import Context from 'contexts/Context'

import Header from './Header'
import Footer from './Footer'

export default ({ children }) =>
  <Context.Consumer>
    {({ heroImage, title }) => (
      <div>
        <Head>
          <title>{}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet"/>
        </Head>
        <div className="hero-area" style={{backgroundImage: `url(${heroImage})`}} />
        <Header />
        <div className="content-header">
          <h1>{title}</h1>
        </div>
        <div className="content">
          {children}
        </div>
        <Footer/>
      </div>
    )}
  </Context.Consumer>
