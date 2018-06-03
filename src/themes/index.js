import React from 'react'
import light from './light'
import dark from './dark'

export const themes = {
  light,
  dark,
}

const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
})

export default ThemeContext
