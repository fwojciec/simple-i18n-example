import { useContext } from "react"
import { LocaleContext } from "../context/LocaleContext"

export default function useTranslation() {
  const { locale } = useContext(LocaleContext)

  function t(key: string) {
    if (!locale.translations[key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`)
    }
    return locale.translations[key] || ""
  }

  return {
    t,
    locale: locale.lang
  }
}
