import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { locales, languageNames } from '../translations/config'
import { LocaleContext } from '../context/LocaleContext'

const LocaleSwitcher: React.FC = () => {
  const { locale } = React.useContext(LocaleContext)
  const router = useRouter()
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

export default LocaleSwitcher
