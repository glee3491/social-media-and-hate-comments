import '../assets/scss/index.scss'
import 'splitting/dist/splitting.css'

import React, { useState, useLayoutEffect } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import { useStaticQuery, graphql } from 'gatsby'
import { setConfig } from 'react-hot-loader'

import Footer from '../components/footer'

let Splitting
if (typeof window !== `undefined`) {
  Splitting = require('splitting')
}

// for hot-reloader to work - https://github.com/gaearon/react-hot-loader/issues/1088
setConfig({ pureSFC: true })

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `)

  const { title, description, keywords } = site.siteMetadata

  const [themeDark, setThemeDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useLayoutEffect(() => {
    Splitting({ by: 'chars' })
  })

  if (typeof window === `undefined`) return null

  if (themeDark) {
    document.documentElement.classList.remove('theme-light')
    document.documentElement.classList.add('theme-dark')
  } else {
    document.documentElement.classList.remove('theme-dark')
    document.documentElement.classList.add('theme-light')
  }

  return (
    <>
      <Helmet
        title={title}
        meta={[
          { charSet: 'utf-8' },
          { httpEquiv: 'Content-Language', content: 'en-us' },
          { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
          { httpEquiv: 'cleartype', content: 'on' },
          {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1',
          },
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
          { name: 'google', value: 'notranslate' },
          { name: 'HandheldFriendly', content: 'true' },
          { name: 'apple-mobile-web-app-title', content: title },
          { name: 'apple-mobile-web-app-capable', content: 'yes' },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'white',
          },
          { name: 'msapplication-TileColor', content: '#da532c' },
          { name: 'theme-color', content: '#ffffff' },
        ]}
      />

      <main className={`layout`}>{children}</main>

      <Footer
        themeDark={themeDark}
        setThemeDark={setThemeDark}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
