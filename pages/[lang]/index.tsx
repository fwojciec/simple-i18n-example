import React from 'react'
import { I18nContext } from '../../context/I18nContext'
import Painting from '../../components/Painting'
import Layout from '../../components/Layout'

const IndexPage: React.FC = () => {
  const { translate } = React.useContext(I18nContext)
  return (
    <Layout title={translate('notAPipe')}>
      <Painting />
    </Layout>
  )
}

export default IndexPage
