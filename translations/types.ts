import { locales } from './config'

export type Locale = typeof locales[number]

export interface Translations {
  [key: string]: string
}

export type Strings = {
  [key in Locale]: Translations
}

export interface Namespace {
  namespace: string
}

export function isLocale(tested: string): tested is Locale {
  return locales.some(locale => locale === tested)
}
