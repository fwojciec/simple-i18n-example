import React from 'react'
import Head from 'next/head'
import Navigation from './Navigation'

interface Props {
  title: string
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navigation />
      <div>{children}</div>
    </>
  )
}

export default Layout
