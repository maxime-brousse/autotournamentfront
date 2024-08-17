import { Paper, ThemeProvider, createTheme } from '@mui/material'
import { Footer, Header } from 'Components/Common'
import { useCookieStorage } from 'react-mkx-storage'
import { Outlet } from 'react-router-dom'

/**
 * Layout component to provide consistent layout structure throughout the application.
 * @returns {JSX.Element} Layout component JSX
 */
const Layout = () => {
  // Get theme mode from cookie storage
  /**
   * Mode value representing the theme mode.
   * @type {'dark' | 'light'}
   */
  const [mode, setMode] = useCookieStorage('mode', 'dark')

  // Create MUI theme based on the selected mode
  const theme = createTheme({ palette: { mode } })

  // Determine if the mode is dark
  const isDark = mode === 'dark'

  return (
    <ThemeProvider theme={theme}>
      <Paper
        style={{ backgroundColor: isDark ? 'rgb(39 39 42)' : 'rgb(244 244 245)' }}
        className="!rounded-none"
        elevation={10}
      >
        {/* Header component with mode and setMode props */}
        <Header setMode={setMode} mode={mode} />
        {/* Render nested routes */}
        <Outlet />
        {/* Footer component */}
        <Footer />
      </Paper>
    </ThemeProvider>
  )
}

export default Layout
