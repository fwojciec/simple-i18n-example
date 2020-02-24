import React from 'react'
import { useRouter } from 'next/router'
import { Locale, Translations, isLocale } from '../translations/types'
import strings from '../translations/locales/en'
interface LocaleProps {
  lang: Locale
  translations: Translations
  namespace: string
}

interface ContextProps {
  readonly locale: LocaleProps
  readonly setLocale: (locale: LocaleProps) => void
}

export const LocaleContext = React.createContext<ContextProps>({
  locale: {
    lang: 'en', // default lang
    translations: strings.common, // default translations TODO: what to do here?
    namespace: 'common' // default namespace TODO: could we null this? 'common' might be misleading
  },
  setLocale: () => null
})

export const LocaleProvider: React.FC<LocaleProps> = ({ lang, translations, namespace, children }) => {
  const [locale, setLocale] = React.useState({ lang, translations, namespace })
  const { query } = useRouter()

  React.useEffect(() => {
    if (locale.lang !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale.lang)
    }
  }, [locale.lang])

  React.useEffect(() => {
    const { lang } = query
    if (typeof lang === 'string' && isLocale(lang) && locale.lang !== lang) {
      setLocale({ lang, translations, namespace })
    }
  }, [query.lang, locale.lang, query, translations, namespace])

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}
