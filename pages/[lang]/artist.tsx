import React from 'react'
import useTranslation from '../../hooks/useTranslation'
import Layout from '../../components/Layout'
import Artist from '../../components/Artist'

const ArtistPage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Layout title={`${t('about')} René Magritte`}>
      <Artist />
    </Layout>
  )
}

export default ArtistPage
