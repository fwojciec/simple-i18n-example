import React from 'react'
import { withRouter } from 'next/dist/client/router'
import { WithRouterProps } from 'next/dist/client/with-router'
import { locales, languageNames } from '../translations/config'
import { I18nContext } from '../context/I18nContext'

const LocaleSwitcher: React.FC<WithRouterProps> = ({ router }) => {
  const { locale } = React.useContext(I18nContext)
  const regex = new RegExp(`^/(${locales.join('|')})`)
  return (
    <select
      value={locale}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        router.push(router.pathname, router.asPath.replace(regex, `/${e.target.value}`))
      }
    >
      {locales.map(locale => (
        <option key={locale} value={locale}>
          {languageNames[locale]}
        </option>
      ))}
    </select>
  )
}

export default withRouter(LocaleSwitcher)
