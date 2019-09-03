import React from 'react'
import Head from 'next/head'
import useTranslation from '../hooks/useTranslation'
import Navigation from './Navigation'

interface Props {
  titleKey: string
}

const Layout: React.FC<Props> = ({ titleKey, children }) => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t(titleKey)}</title>
      </Head>
      <Navigation />
      <style jsx global>{`
        * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
            Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
      <>{children}</>
    </>
  )
}

export default Layout
