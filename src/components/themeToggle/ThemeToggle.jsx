import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import './themeToggle.css'

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light')
    const saveTheme = localStorage.getItem('save-theme')
    if (saveTheme) {

  
    }
    useEffect(() => {
        
        if (saveTheme) {
            setTheme(saveTheme)
            document.body.classList.toggle('dark-theme', saveTheme === 'dark')
        }
    }, [])

    const toggleTheme = () => {
     const newTheme = theme === 'light' ? 'dark' : 'light'
     setTheme(newTheme)
     document.body.classList.toggle('dark-theme', newTheme === 'dark')
     localStorage.setItem('save-theme', newTheme)
    }


    return (
        <div className="them-btn">
          {theme === 'light' ? <FaMoon onClick={toggleTheme} /> : <FaSun onClick={toggleTheme} />}
        </div>
    )
}

export default ThemeToggle