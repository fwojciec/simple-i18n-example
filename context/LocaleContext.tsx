import React from 'react'
import { useRouter } from 'next/router'
import { Locale, Translations, isLocale } from '../translations/types'
import strings from '../translations/strings'

interface LocaleProps {
  lang: Locale
  translations: Translations
}

interface ContextProps {
  readonly locale: LocaleProps
  readonly setLocale: (locale: LocaleProps) => void
}

export const LocaleContext = React.createContext<ContextProps>({
  locale: {
    lang: 'en', // default lang
    translations: strings.en // default translations 
  },
  setLocale: () => null
})

export const LocaleProvider: React.FC<LocaleProps> = ({ lang, translations, children }) => {
  const [locale, setLocale] = React.useState({ lang, translations })
  const { query } = useRouter()

  React.useEffect(() => {
    if (locale.lang !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale.lang)
    }
  }, [locale.lang])

  React.useEffect(() => {
    const { lang } = query
    if (typeof lang === 'string' && isLocale(lang) && locale.lang !== lang) {
      setLocale({ lang, translations })
    }
  }, [query.lang, locale.lang])

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}
