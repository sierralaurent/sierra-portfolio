import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/Fonts/style.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
  <main>
  <Component {...pageProps} />
  </main>
  )
}
