import React from 'react'
import { useRouter } from 'next/router'
import { Locale, isLocale } from '../translations/types'

interface ContextProps {
  readonly locale: Locale
  readonly setLocale: (locale: Locale) => void
}

export const LocaleContext = React.createContext<ContextProps>({
  locale: 'en',
  setLocale: () => null
})

export const LocaleProvider: React.FC<{ lang: Locale }> = ({ lang, children }) => {
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

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}
