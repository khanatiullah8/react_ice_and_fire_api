import React from 'react'
import Character from './features/character/Character'
import GlobalStyle from './GlobalStyle'
import theme from './themeProvider'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Character />
      </ThemeProvider>
    </>
  )
}

export default App