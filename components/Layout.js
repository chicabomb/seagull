import React from 'react'
import Head from 'next/head'
import Context from 'contexts/Context'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) =>
  <Context.Consumer>
    {({ heroImage, tags, destination }) => (
      <div>
        <Head>
          <title>{}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <div className="hero-area" style={{backgroundImage: `url(${heroImage})`}} />
        <Header />
        <div className="content-header">
          <h1>{tags[0]} in {destination.city}</h1>
        </div>
        <div className="content">
          {children}
        </div>
        <Footer/>
      </div>
    )}
  </Context.Consumer>

export default Layout;
