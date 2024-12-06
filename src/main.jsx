import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { theme } from './styles/theme.js'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global-styles.js'
import {App} from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
