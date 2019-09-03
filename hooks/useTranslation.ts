import { useContext } from 'react'
import { LocaleContext } from '../context/LocaleContext'
import strings from '../translations/strings'
import { defaultLocale } from '../translations/config'

export default function useTranslation() {
  const { locale } = useContext(LocaleContext)

  function t(key: string) {
    if (!strings[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`)
    }
    return strings[locale][key] || strings[defaultLocale][key] || ''
  }

  return {
    t,
    locale
  }
}
