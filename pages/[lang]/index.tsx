import React from 'react'
import useTranslation from '../../hooks/useTranslation'
import Layout from '../../components/Layout'
import Painting from '../../components/Painting'
import withLocale from '../../hocs/withLocale'

const IndexPage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Layout title={t('notAPipe')}>
      <Painting />
    </Layout>
  )
}

export default withLocale(IndexPage)
