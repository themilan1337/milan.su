export const useTheme = () => {
  const theme = useState<'light' | 'dark'>('theme', () => {
    if (process.client) {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark' || saved === 'light') {
        return saved
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  })

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    if (process.client) {
      localStorage.setItem('theme', theme.value)
      document.documentElement.classList.toggle('dark', theme.value === 'dark')
    }
  }

  const setTheme = (newTheme: 'light' | 'dark') => {
    theme.value = newTheme
    if (process.client) {
      localStorage.setItem('theme', newTheme)
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }
  }

  // Apply theme on mount
  if (process.client) {
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
  }

  return {
    theme: readonly(theme),
    toggleTheme,
    setTheme
  }
}
