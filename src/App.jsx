import { useState } from 'react'
import AppBrasilPortuguese from './AppBrasilPortuguese.jsx'
import AppBrasilEnglish from './AppBrasilEnglish.jsx'

function App() {
  const [language, setLanguage] = useState('pt') // Default to Portuguese

  const handleLanguageChange = () => {
    setLanguage(prevLang => prevLang === 'pt' ? 'en' : 'pt')
  }

  return (
    <div>
      {language === 'pt' ? (
        <AppBrasilPortuguese onChangeLanguage={handleLanguageChange} />
      ) : (
        <AppBrasilEnglish onChangeLanguage={handleLanguageChange} />
      )}
    </div>
  )
}

export default App
