import '@/styles/globals.css'
import '@/styles/fonts.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={Montserrat.className} >
  <Component {...pageProps} />
  </main>
  )
}
