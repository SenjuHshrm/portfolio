import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Toggle = () => {
  const {theme, setTheme} = useContext(ThemeContext)

  return (
    theme === 'dark' ?
    (<button onClick={ () => setTheme(theme === 'dark' ? 'light' : 'dark')} type='button'><FaSun /></button>)
    :
    (<button onClick={ () => setTheme(theme === 'dark' ? 'light' : 'dark')} type='button'><FaMoon /></button>)
  )
}

export default Toggle