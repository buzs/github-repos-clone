import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { themes } from '../styles/theme'
import GlobalStyles from '../styles/GlobalStyles'
import Layout from '../layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={themes.dark}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
export default MyApp
