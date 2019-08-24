import React from 'react'
import { Locale, isLocale } from '../translations/types'
import { useRouter } from 'next/dist/client/router'

/**
 * I18nContext
 */

interface ContextProps {
  readonly locale: Locale
  readonly setLocale: (locale: Locale) => void
}

export const I18nContext = React.createContext<ContextProps>({
  locale: 'en',
  setLocale: () => null
})

/**
 * I18n Context: Provider
 */

export const I18nProvider: React.FC<{ lang: Locale }> = ({ lang, children }) => {
  const [locale, setLocale] = React.useState(lang)
  const { query } = useRouter()

  React.useEffect(() => {
    if (locale !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale)
    }
  }, [locale])

  React.useEffect(() => {
    if (typeof query.lang === 'string' && isLocale(query.lang) && locale !== query.lang) {
      setLocale(query.lang)
    }
  }, [query.lang, locale])

  return <I18nContext.Provider value={{ locale, setLocale }}>{children}</I18nContext.Provider>
}
