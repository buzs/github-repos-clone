import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { themes } from '../styles/theme'
import GlobalStyles from '../styles/GlobalStyles'
import Layout from '../layouts'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [switchButton, setSwitchButton] = useState(false);
  const [theme, setTheme] = useState('dark');

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? themes.dark : themes.light}>
        <GlobalStyles />
        <Layout isOn={switchButton} handleToggle={() => {
          setSwitchButton(!switchButton)
          theme === 'dark' ? setTheme('light') : setTheme('dark')
        }}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
export default MyApp
