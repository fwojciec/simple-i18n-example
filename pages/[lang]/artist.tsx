import React from 'react'
import Layout from '../../components/Layout'
import Artist from '../../components/Artist'
import withAPILocale from '../../hocs/withAPILocale'

const ArtistPage: React.FC = () => {
  return (
    <Layout titleKey="about">
      <Artist />
    </Layout>
  )
}

export default withAPILocale('artist')(ArtistPage)
