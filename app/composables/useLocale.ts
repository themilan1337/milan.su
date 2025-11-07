export type Locale = 'en' | 'ar' | 'ru'

export interface LocaleInfo {
  code: Locale
  name: string
  dir: 'ltr' | 'rtl'
}

export const locales: LocaleInfo[] = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'ru', name: 'Русский', dir: 'ltr' }
]

export const useLocale = () => {
  const locale = useState<Locale>('locale', () => {
    if (process.client) {
      const saved = localStorage.getItem('locale') as Locale
      if (saved && locales.some(l => l.code === saved)) {
        return saved
      }
    }
    return 'en'
  })

  const currentLocaleInfo = computed(() => {
    return locales.find(l => l.code === locale.value) || locales[0]
  })

  const setLocale = (newLocale: Locale) => {
    locale.value = newLocale
    if (process.client) {
      localStorage.setItem('locale', newLocale)
      const localeInfo = locales.find(l => l.code === newLocale)
      if (localeInfo) {
        document.documentElement.setAttribute('dir', localeInfo.dir)
        document.documentElement.setAttribute('lang', newLocale)
      }
    }
  }

  // Apply locale on mount
  if (process.client) {
    const localeInfo = locales.find(l => l.code === locale.value)
    if (localeInfo) {
      document.documentElement.setAttribute('dir', localeInfo.dir)
      document.documentElement.setAttribute('lang', locale.value)
    }
  }

  return {
    locale: readonly(locale),
    currentLocaleInfo,
    locales,
    setLocale
  }
}
