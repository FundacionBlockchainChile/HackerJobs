import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SSRProvider from 'react-bootstrap/SSRProvider'
// Import the functions you need from the SDKs you need

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default MyApp
