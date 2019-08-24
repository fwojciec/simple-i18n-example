import { locales } from './config'

export type Locale = typeof locales[number]

export type Strings = { [key in Locale]: { [key: string]: string } }

export function isLocale(locale: string): locale is Locale {
  return locales.some(loc => loc == locale)
}
