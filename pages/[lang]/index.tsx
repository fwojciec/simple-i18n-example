import React from 'react'
import Layout from '../../components/Layout'
import Painting from '../../components/Painting'
import withAPILocale from '../../hocs/withAPILocale'

const IndexPage: React.FC = () => {
  return (
    <Layout titleKey="notAPipe">
      <Painting />
    </Layout>
  )
}

export default withAPILocale('common')(IndexPage)
