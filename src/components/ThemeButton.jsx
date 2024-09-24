import { useState, useEffect } from 'react'
import SunIcon from '/src/assets/sun.svg'
import MoonIcon from '/src/assets/moon.svg' 

const ThemeButton = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode)
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  return (
    <button
      onClick={toggleDarkMode}
      className='p-2 rounded-full  dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-200'
      aria-label='Toggle dark mode'
    >
      {darkMode ? (
        <img src={SunIcon} width={20} height={20} />
      ) : (
        <img src={MoonIcon} width={20} height={20} />
      )}
    </button>
  )
}

export default ThemeButton
