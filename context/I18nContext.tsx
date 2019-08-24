import React from 'react'
import strings from '../translations/strings'
import { Locale, isLocale } from '../translations/types'
import { useRouter } from 'next/dist/client/router'

/**
 * I18nContext
 */

interface ContextProps {
  readonly locale: Locale
  readonly setLocale: (locale: Locale) => void
  readonly translate: (value: string) => string
}

export const I18nContext = React.createContext<ContextProps>({
  locale: 'en',
  setLocale: () => null,
  translate: () => ''
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

  function translate(value: string) {
    return strings[locale][value] || 'Translation not found'
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, translate }}>{children}</I18nContext.Provider>
  )
}
