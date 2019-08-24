import React from 'react'
import { I18nContext } from '../context/I18nContext'

const Painting: React.FC = () => {
  const { translate } = React.useContext(I18nContext)
  return (
    <div>
      <h1>{translate('notAPipe')}</h1>
      <img src="/static/img/not_a_pipe.jpg" alt={translate('notAPipe')} />
    </div>
  )
}

export default Painting
