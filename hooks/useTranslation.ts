import { useContext } from 'react'
import { LocaleContext } from '../context/LocaleContext'
import strings from '../translations/strings'
import { defaultLocale } from '../translations/config'

export default function useTranslation() {
  const { locale } = useContext(LocaleContext)

  function t(value: string) {
    if (!strings[locale][value]) {
      console.warn(`Translation '${value}' for locale '${locale}' not found.`)
    }
    return strings[locale][value] || strings[defaultLocale][value] || ''
  }

  return {
    t,
    locale
  }
}
