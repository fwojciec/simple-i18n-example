import { defaultLocale } from './config'
import { Locale, isLocale } from './types'

export function getInitialLocale(): Locale {
  // first check the localSetting, in case the preference was previously set
  const localSetting = localStorage.getItem('locale')
  if (localSetting && isLocale(localSetting)) {
    return localSetting
  }

  // if that doesn't work, try setting based on the browser language setting
  const browserSetting = navigator.language.split('-')[0]
  if (isLocale(browserSetting)) {
    return browserSetting
  }

  // return the default otherwise
  return defaultLocale
}
