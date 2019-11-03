import React from 'react'
import useTranslation from '../hooks/useTranslation'

const Painting: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('notAPipe')}</h1>
      <img src="/img/not_a_pipe.jpg" alt={t('notAPipe')} />
    </div>
  )
}

export default Painting
