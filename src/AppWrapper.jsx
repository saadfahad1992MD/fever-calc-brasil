import { useState, useEffect } from 'react'
import App from './App.jsx'
import AppEnglish from './AppEnglish.jsx'
import { LanguageSelector } from './LanguageSelector.jsx'

export function AppWrapper() {
  const [language, setLanguage] = useState('ar')

  // Check if language was previously selected
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
    // Set document direction based on current language
    document.documentElement.dir = (savedLanguage || 'ar') === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = savedLanguage || 'ar'
  }, [])

  const handleSelectLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('selectedLanguage', lang)
    // Set document direction
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  const handleChangeLanguage = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar'
    setLanguage(newLanguage)
    localStorage.setItem('selectedLanguage', newLanguage)
    // Set document direction
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = newLanguage
  }

  // Language selector removed - Arabic is default

  if (language === 'ar') {
    return <App onChangeLanguage={handleChangeLanguage} />
  }

  return <AppEnglish onChangeLanguage={handleChangeLanguage} />
}

