import React from 'react'
import App from 'next/app'
import { I18nProvider } from '../context/I18nContext'
import Error from 'next/error'
import { isLocale } from '../translations/types'
import { withRouter } from 'next/dist/client/router'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    if (typeof router.query.lang === 'undefined' || router.asPath === '/') {
      return <Component {...pageProps} />
    }

    if (typeof router.query.lang === 'string' && !isLocale(router.query.lang)) {
      return <Error statusCode={404} />
    }

    if (typeof router.query.lang !== 'string') {
      return <Error statusCode={500} />
    }

    return (
      <I18nProvider lang={router.query.lang}>
        <Component {...pageProps} />
        <style jsx global>{`
          * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
              Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          }
        `}</style>
      </I18nProvider>
    )
  }
}

export default withRouter(MyApp)
