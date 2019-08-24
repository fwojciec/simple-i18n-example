import React from 'react'
import { I18nContext } from '../context/I18nContext'

const Artist: React.FC = () => {
  const { locale, translate } = React.useContext(I18nContext)
  return (
    <div>
      <h1>René Magritte</h1>
      <img src="/static/img/magritte.jpg" alt="Rene Magritte" />
      <p>{translate('bio')}</p>
      <a href={`http://${locale}.wikipedia.org/wiki/René_Magritte`}>Read more on Wikipedia...</a>
    </div>
  )
}

export default Artist
