import React from 'react'
import { I18nContext } from '../../context/I18nContext'
import Layout from '../../components/Layout'
import Artist from '../../components/Artist'

const ArtistPage: React.FC = () => {
  const { translate } = React.useContext(I18nContext)
  return (
    <Layout title={`${translate('about')} René Magritte`}>
      <Artist />
    </Layout>
  )
}

export default ArtistPage
