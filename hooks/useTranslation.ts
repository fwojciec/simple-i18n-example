import { useContext } from 'react'
import { I18nContext } from '../context/I18nContext'
import strings from '../translations/strings'
import { defaultLocale } from '../translations/config'

export default function useTranslation() {
  const { locale } = useContext(I18nContext)

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
