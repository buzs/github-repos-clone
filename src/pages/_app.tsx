import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { themes } from '../styles/theme'
import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={themes.light}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
